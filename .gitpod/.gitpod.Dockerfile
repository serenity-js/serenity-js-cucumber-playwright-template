FROM gitpod/workspace-full

ARG DEBIAN_FRONTEND=noninteractive
ARG TZ=UTC
# See https://playwright.dev/docs/ci#caching-browsers
ENV PLAYWRIGHT_BROWSERS_PATH=~/.cache/ms-playwright/ms-playwright
ARG DOCKER_IMAGE_NAME_TEMPLATE="mcr.microsoft.com/playwright:v%version%-focal"
ENV SHELL=/bin/bash

# Playwright has a peculiar installation procedure,
# where it fails silently if you try to install it on GitPod
# as it assumes it's being installed in "dev mode":
# https://github.com/microsoft/playwright/blob/35a9daa4255f2ba556d4d7af6243cc84d1ac4f2a/packages/playwright/install.js#L19-L24
#
# Instead, I need to use the same trick Playwright themselves use,
# which is to install Playwright using a temporary Npm project
# https://github.com/microsoft/playwright/blob/35a9daa4255f2ba556d4d7af6243cc84d1ac4f2a/utils/docker/Dockerfile.focal

USER gitpod

RUN mkdir ${PLAYWRIGHT_BROWSERS_PATH} && \
    mkdir ${PLAYWRIGHT_BROWSERS_PATH}-agent && \
    cd ${PLAYWRIGHT_BROWSERS_PATH}-agent && npm init -y && \
    npm i playwright@latest && \
    npx playwright mark-docker-image "${DOCKER_IMAGE_NAME_TEMPLATE}" && \
    npx playwright install --with-deps && rm -rf /var/lib/apt/lists/* && \
    rm -rf ${PLAYWRIGHT_BROWSERS_PATH}-agent && \
    chmod -R 777 ${PLAYWRIGHT_BROWSERS_PATH}

RUN bash -c "npm i -g http-server && npx --yes playwright install --with-deps"
