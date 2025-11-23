# Serenity/JS Cucumber Playwright Template

[![Build Status](https://github.com/serenity-js/serenity-js-cucumber-playwright-template/workflows/build/badge.svg)](https://github.com/serenity-js/serenity-js-cucumber-playwright-template/actions)
[![Serenity/JS on GitHub](https://img.shields.io/badge/github-serenity--js-yellow?logo=github)](https://github.com/serenity-js/serenity-js)
[![Serenity/JS on StackOverflow](https://img.shields.io/badge/stackoverflow-serenity--js-important?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/serenity-js)
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod)](https://gitpod.io/from-referrer/)

[![Follow Serenity/JS on LinkedIn](https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin)](https://www.linkedin.com/company/serenity-js)
[![Watch Serenity/JS on YouTube](https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube)](https://www.youtube.com/@serenity-js)
[![Join Serenity/JS Community Chat](https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix)](https://matrix.to/#/#serenity-js:gitter.im)
[![Support Serenity/JS on GitHub](https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github)](https://github.com/sponsors/serenity-js)

Use this [template repository](https://help.github.com/en/articles/creating-a-repository-from-a-template)
to get started with acceptance testing your web applications using [Serenity/JS](https://serenity-js.org),
[Cucumber](https://github.com/cucumber/cucumber-js) and [Playwright](https://playwright.dev/).

Learn more:
- [Serenity BDD reports for this project](https://serenity-js.github.io/serenity-js-cucumber-playwright-template/)
- [Serenity/JS website, tutorials, and API docs](https://serenity-js.org/)

## Usage

This repository is a GitHub template. You can use it to [create a new GitHub repository](https://help.github.com/en/articles/creating-a-repository-from-a-template), [clone it to your computer](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository).


## 🌏  Open in the Cloud 
Click any of the buttons below to start a new development environment to demo or contribute to the codebase without having to install anything on your machine:

[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode)](https://vscode.dev/github/serenity-js/serenity-js-cucumber-playwright-template)
[![Open in Glitch](https://img.shields.io/badge/Open%20in-Glitch-blue?logo=glitch)](https://glitch.com/edit/#!/import/github/serenity-js/serenity-js-cucumber-playwright-template)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/serenity-js/serenity-js-cucumber-playwright-template)
[![Edit in Codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/serenity-js/serenity-js-cucumber-playwright-template)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/serenity-js/serenity-js-cucumber-playwright-template)
[![Open in Repl.it](https://replit.com/badge/github/withastro/astro)](https://replit.com/github/serenity-js/serenity-js-cucumber-playwright-template)
[![Open in Codeanywhere](https://codeanywhere.com/img/open-in-codeanywhere-btn.svg)](https://app.codeanywhere.com/#https://github.com/serenity-js/serenity-js-cucumber-playwright-template)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/serenity-js/serenity-js-cucumber-playwright-template)


### Installation

Once you have the code on your computer, use your computer terminal to run the following command in the directory where you've cloned the project:
```
npm ci
```

Running [`npm ci`](https://docs.npmjs.com/cli/v6/commands/npm-ci) downloads the [Node modules](https://docs.npmjs.com/about-packages-and-modules) this project depends on,
as well the [Serenity BDD CLI](https://github.com/serenity-bdd/serenity-cli) reporter jar. 

### Corporate networks

If your network administrators require you to use proxy servers or an internal artifact registry (Artifactory, Nexus, etc.), your development environment might require some additional configuration.

The easiest way to do it is to create an [`.npmrc` file](https://docs.npmjs.com/cli/v6/configuring-npm/npmrc) in your home directory: 

```
proxy=http://user:password@host.mycompany.com:8080/
https-proxy=http://user:password@host.mycompany.com:8080/
strict-ssl=false
registry=https://artifactory.mycompany.com/artifactory/
```

If you encounter issues downloading the Serenity BDD CLI jar, please follow the [detailed instructions in the Serenity/JS Handbook](https://serenity-js.org/api/serenity-bdd/#downloading-the-serenity-bdd-reporting-cli).

Similar instructions are available for the [`chromedriver` module](https://www.npmjs.com/package/chromedriver).

### Execution

The project provides several [NPM scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) defined in [`package.json`](package.json):

```
npm run lint            # runs code linter
npm run lint:fix        # attempts to automatically fix linting issues
npm run clean           # removes reports from any previous test run
npm test                # executes the example test suite
                        # and generates the report under ./target/site/serenity
npm start               # starts a mini HTTP server and serves the test reports
                        # at http://localhost:8080
```

## Your feedback matters!

Do you find Serenity/JS useful? Give it a ⭐ star on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/serenity-js/serenity-js)](https://github.com/serenity-js/serenity-js)

Found a bug? Need a feature? Raise [an issue](https://github.com/serenity-js/serenity-js/issues?state=open)
or submit a pull request.

Have feedback? Let me know on [LinkedIn](https://www.linkedin.com/in/janmolak/) or leave a comment in [Serenity/JS discussions on GitHub](/serenity-js/serenity-js/discussions/categories/comments).

And if you have any questions about the framework, or simply want to say hello to other Serenity/JS developers, join us on [Serenity/JS Community Chat](https://matrix.to/#/#serenity-js:gitter.im).

## Support Serenity/JS

Serenity/JS is a free open-source framework, so we rely on our [wonderful GitHub sponsors](https://github.com/sponsors/serenity-js) to keep the lights on.

If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and [become a Serenity/JS GitHub Sponsor](https://github.com/sponsors/serenity-js) today!

[![LinkedIn Follow](https://img.shields.io/badge/Follow%20Serenity%2FJS-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/serenity-js)
[![YouTube Follow](https://img.shields.io/badge/Watch%20@serenity&#8212;JS-FA120F?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@serenity-js)
[![GitHub Sponsors](https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/serenity-js)
