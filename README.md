<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-BADGE:END --> 

# General Nordcloud UI

This repo contains Nordcloud PAT Design System - a collection of reusable react components that can be used in PAT products.

## Components

1. Design System (`/components`)
2. Storybook (`/stories`)

## Usage

[WIP] Install github package.

## Storybook deployment

Storybook allows you to preview GNUI components. It deploys automatically using Amplify Console, triggered by changes on branch `master`. Pipeline steps can be found in `amplify.yml`.

When you create PR against `master` branch, Amplify will create new deployment automatically - the environment will be attached to PR at Github. Reviewers can preview changes using this deployment - after the PR gets merged or rejected, the environment is destroyed automatically by Amplify Console.

## Contributing to this repo

- Please create your components in `src/components` and update stories in `stores`.
- Code should be formatted using [Prettier](https://prettier.io/).
- We are using styled-components for styling.
- All code should be written using TS.
- Every component props should be described using interface.

## Local setup

- git clone this repo
- `npm install`
- `npm run storybook`

## Contributors
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org) specification.
Contributions of any kind are welcome!

## License

Licensed under the MIT License, Copyright © 2020 Nordcloud Engineering

See [LICENSE](./LICENSE) for more information.
