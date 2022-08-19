# https://github.com/gitpod-io/workspace-images/blob/main/base/Dockerfile
FROM gitpod/workspace-node

ARG DEBIAN_FRONTEND=noninteractive
ARG TZ=UTC

# === Install Playwright ===

RUN npx install playwright install --with-deps
