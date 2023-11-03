<div align="center"><img src="https://pub-e71cff0f90204755bc910518d63cacf8.r2.dev/open-system.logo-green.svg" width="100%" altText="Open System" /></div>

<div align="center">
<a href="https://www.patsullivan.org" target="_blank">Website</a>  |  <a href="https://www.patsullivan.org/contact" target="_blank">Contact</a>  |  <a href="https://github.com/sullivanpj/open-system" target="_blank">Repository</a>  |  <a href="https://sullivanpj.github.io/open-system/" target="_blank">Documentation</a>  |  <a href="https://github.com/sullivanpj/open-system/issues/new?assignees=&labels=bug&template=bug-report.yml&title=Bug Report%3A+">Report a Bug</a> | <a href="https://github.com/sullivanpj/open-system/issues/new?assignees=&labels=enhancement&template=feature-request.yml&title=Feature Request%3A+">Request a Feature</a> | <a href="https://github.com/sullivanpj/open-system/issues/new?assignees=&labels=documentation&template=documentation.yml&title=Documentation Request%3A+">Request Documentation</a> | <a href="https://github.com/sullivanpj/open-system/discussions">Ask a Question</a>
</div>

<br />
The <b>Open System</b> is a monorepo containing modern, scalable web application code, additional utility applications/tools, various libraries, and a fully featured, serverless back-end framework. The Open System is built using <a href="https://nx.dev/" target="_blank">Nx</a>, a set of extensible dev tools for monorepos, which helps you develop like Google, Facebook, and Microsoft. Building on top of Nx, the Open System provides a set of tools and patterns that help you scale your monorepo to many teams while keeping the codebase maintainable.

<h3 align="center">💻 Visit <a href="https://www.patsullivan.org" target="_blank">patsullivan.org</a> to stay up to date with this developer<br /><br /></h3>

[![github](https://img.shields.io/github/package-json/v/sullivanpj/open-system?style=for-the-badge&color=10B981)](https://github.com/sullivanpj/open-system)&nbsp;[![Nx](https://img.shields.io/badge/Nx-14.4.2-lightgrey?style=for-the-badge&logo=nx&logoWidth=20&&color=10B981)](http://nx.dev/)&nbsp;[![NextJs](https://img.shields.io/badge/Next.js-13.0.5-lightgrey?style=for-the-badge&logo=nextdotjs&logoWidth=20&color=10B981)](https://nextjs.org/)&nbsp;[![codecov.io](https://img.shields.io/codecov/c/github/commitizen/cz-cli.svg?style=for-the-badge&color=10B981)](https://codecov.io/github/commitizen/cz-cli?branch=master)&nbsp;[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge&logo=commitlint&color=10B981)](http://commitizen.github.io/cz-cli/)&nbsp;![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge&color=10B981)&nbsp;[![documented with docusaurus](https://img.shields.io/badge/documented_with-docusaurus-success.svg?style=for-the-badge&logo=readthedocs&color=10B981)](https://docusaurus.io/)

<h3 align="center" bold="true">⚠️ <b>Attention</b> ⚠️ - This repository has been moved over to the <a href="https://github.com/storm-software" target="_blank">⚡Storm Software organization</a> to allow for easier collaboration with other OSS developers! Please see: <a href="https://github.com/storm-software/storm-ops" target="_blank">Storm-Ops repository - Workspace Tools</a>, <a href="https://github.com/storm-software/forecast" target="_blank">Forecast repository - CodeGen Tools</a>, and <a href="https://github.com/storm-software/stormstack" target="_blank">Storm-Stack repository - General Web Application Libraries</a>. <br /><br /></h3>

<!--#if GitHubActions-->

[![GitHub Actions Build History](https://buildstats.info/github/chart/sullivanpj/open-system?branch=main&includeBuildsFromPullRequest=false)](https://github.com/sullivanpj/open-system/actions)

<!--#endif-->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of Contents

- [Quick Features](#quick-features)
  - [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Build](#build)
  - [Development Server](#development-server)
- [Storm - Model-Driven Development](#storm---model-driven-development)
- [Environment Configuration Help](#environment-configuration-help)
  - [Plug-Ins](#plug-ins)
  - [Generate an Application](#generate-an-application)
  - [Generate a Library](#generate-a-library)
  - [Code Scaffolding](#code-scaffolding)
- [Testing](#testing)
  - [Running Unit Tests](#running-unit-tests)
  - [Running End-to-End Tests](#running-end-to-end-tests)
  - [Understand your workspace](#understand-your-workspace)
- [☁ Nx Cloud](#-nx-cloud)
  - [Distributed Computation Caching \& Distributed Task Execution](#distributed-computation-caching--distributed-task-execution)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [Contributors ✨](#contributors-)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br />

# Quick Features

The following are some of the features/publishable code that are included in this repository:

- Transport/protocol/backend agnostic data fetching (REST, GraphQL, promises, whatever!)
- Auto Caching + Refetching (stale-while-revalidate, Window Refocus, Polling/Realtime)
- Parallel + Dependent Queries
- Mutations + Reactive Query Refetching
- Multi-layer Cache + Automatic Garbage Collection
- Paginated + Cursor-based Queries
- Load-More + Infinite Scroll Queries w/ Scroll Recovery
- Request Cancellation
- React Suspense + Fetch-As-You-Render Query Prefetching
- Dedicated Devtools

## Tech Stack

<div>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/codecov/codecov-plain.svg" alt="Codecov" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-plain.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-plain.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/markdown/markdown-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-plain.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-plain.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/storybook/storybook-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-plain.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/blender/blender-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jamstack/jamstack-original.svg" alt="Kafka" width="40" height="40"/>&nbsp;<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="Kafka" width="40" height="40"/>&nbsp;
</div>

**Note:** The above list of technologies is far from exhaustive. It is just meant to serve as a short list of _some_ of the technologies that are used in this repository.
<br /><br />

# Getting Started

Once the code is pulled locally, open a command prompt and run `npm install` in the root repo directory (/open-system).

More information can be found in the [Open System documentation](https://sullivanpj.github.io/open-system/docs/getting-started/installation).

## Build

Run `nx build open-system` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Development Server

Run `nx serve open-system` for a dev server. Navigate to <http://localhost:4200/>. The app will automatically reload if you change any of the source files.
<br /><br />

# Storm - Model-Driven Development

In the Open System, ⚡ _storm_ refers to a collection of applications and libraries that are used to build server-side code from a user-defined model. This functionality all lives in the Open System's `tools` directory (/tools/storm).

<div align="center"><img src="https://pub-e71cff0f90204755bc910518d63cacf8.r2.dev/storm-generate.bg.png" width="800px" /></div>
<br />

More information can be found in the [📓 Documentation](https://sullivanpj.github.io/open-system).
<br /><br />

# Environment Configuration Help

If you run into any issues while trying to run any of the above steps, please reach out to Patrick Sullivan. See the [Support](#support) section for more information.

## Plug-Ins

Some of the plug-ins used by this repository are:

- [@nx/next](https://nx.dev/packages/next)
- [@nx/react](https://nx.dev/packages/react)
- [@nx/lint](https://nx.dev/linter/overview)
- [@nx/js](https://nx.dev/js/overview)
- [@nx/node](https://nodejs.org)
- [@nx/web](https://nx.dev/web/overview)
- [@nx/storybook](https://nx.dev/storybook/overview-react)
- [@nx/cypress](https://nx.dev/packages/cypress)
- [@nx/jest](https://nx.dev/packages/jest)
- And more...

## Generate an Application

Run `nx g @nx/react:app open-system` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a Library

Run `nx g @nx/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@open-system/my-lib`.

## Code Scaffolding

Run `nx g @nx/react:component my-component --project=open-system` to generate a new component.
<br /><br />

# Testing

Open System uses [Jest](https://jestjs.io/) for unit testing and [Cypress](https://www.cypress.io/) for end-to-end testing.

## Running Unit Tests

Run `nx test open-system` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running End-to-End Tests

Run `nx e2e open-system` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of the Open System projects.
<br /><br />

# ☁ Nx Cloud

Nx caches the output of any previously run command such as testing and building, so it can replay the cached results instead of rerunning it. Nx Cloud allows you to share the computation cache across everyone in your team and CI.

<p align="center"><img src="https://pub-4661138852db4e5da99a6660fbf9b633.r2.dev/Nx Cloud - Dashboard.png" width="100%" altText="Nx Cloud - Dashboard" /></p>

## Distributed Computation Caching & Distributed Task Execution

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
<br /><br />

# Roadmap

See the [open issues](https://github.com/sullivanpj/open-system/issues) for a list of proposed features (and known issues).

- [Top Feature Requests](https://github.com/sullivanpj/open-system/issues?q=label%3Aenhancement+is%3Aopen+sort%3Areactions-%2B1-desc) (Add your votes using the 👍 reaction)
- [Top Bugs](https://github.com/sullivanpj/open-system/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Areactions-%2B1-desc) (Add your votes using the 👍 reaction)
- [Newest Bugs](https://github.com/sullivanpj/open-system/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
  <br /><br />

# Contributing

First off, thanks for taking the time to contribute! Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make will benefit everybody else and are **greatly appreciated**.

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.

Please adhere to this project's [code of conduct](.github/CODE_OF_CONDUCT.md).

You can use [markdownlint-cli](https://github.com/sullivanpj/open-system/markdownlint-cli) to check for common markdown style inconsistency.
<br /><br />

# Support

Reach out to the maintainer at one of the following places:

- [Contact](https://www.patsullivan.org/contact)
- [GitHub discussions](https://github.com/sullivanpj/open-system/discussions)
- <contact@patsullivan.org>

# License

This project is licensed under the **BSD-2-Clause license**. Feel free to edit and distribute this template as you like.

See [LICENSE](LICENSE) for more information.

# Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://www.sullypat.com/"><img src="https://avatars.githubusercontent.com/u/99053093?v=4?s=100" width="100px;" alt="Patrick Sullivan"/><br /><sub><b>Patrick Sullivan</b></sub></a><br /><a href="#design-sullivanpj" title="Design">🎨</a> <a href="https://github.com/sullivanpj/open-system/commits?author=sullivanpj" title="Code">💻</a> <a href="#tool-sullivanpj" title="Tools">🔧</a> <a href="https://github.com/sullivanpj/open-system/commits?author=sullivanpj" title="Documentation">📖</a> <a href="https://github.com/sullivanpj/open-system/commits?author=sullivanpj" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://tylerbenning.com/"><img src="https://avatars.githubusercontent.com/u/7265547?v=4?s=100" width="100px;" alt="Tyler Benning"/><br /><sub><b>Tyler Benning</b></sub></a><br /><a href="#design-tbenning" title="Design">🎨</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <a href="https://all-contributors.js.org/docs/en/bot/usage">
            <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg" />
            Add your contributions</a>
        </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<h1 align="center"></h1>
<br />
<div align="center">
  <img src="https://pub-e71cff0f90204755bc910518d63cacf8.r2.dev/logo-opengraph.gif" width="100%"/>
</div>
<div align="center">
<a href="https://www.patsullivan.org" target="_blank">Website</a>  |  <a href="https://www.patsullivan.org/contact" target="_blank">Contact</a>  |  <a href="https://linkedin.com/in/patrick-sullivan-865526b0" target="_blank">LinkedIn</a>  |  <a href="https://medium.com/@pat.joseph.sullivan" target="_blank">Medium</a>  | <a href="https://github.com/sullivanpj" target="_blank">GitHub</a>  |  <a href="https://keybase.io/sullivanp" target="_blank">OpenPGP Key</a>
</div>

<div align="center">
<p><b>Fingerprint:</b> 1BD2 7192 7770 2549 F4C9 F238 E6AD C420 DA5C 4C2D</p>
</div>

<h2 align="center">💻 Visit <a href="https://www.patsullivan.org" target="_blank">patsullivan.org</a> to stay up to date with this developer<br /><br /></h2>
