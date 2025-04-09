# Frontend template repo

A minimal starter repo for frontend projects. Created to ensure we're following some baseline best practices.

## Features

- `.nvmrc` file to ensure we're using the latest LTS version of node.
- `.npmrc` file to ensure we're pinning dependencies as a best practice. Improves security and maintainability.
- `.editorconfig` for initial formatting. Teams should consider adding linting and prettier depending on their tech stack.

## How to use this repo

A template repo will create a new repo with the same file structure, branches, and files. You can also choose which branches you want to keep. The git histories are separate, so you can kickstart your repo without worrying if you're affecting the template.

More information on using template repo's:
https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template

## Contributing

Repo's should have guidelines for naming branches and commit style. Below are some suggestions based on the [Bixal website](https://github.com/Bixal/bixal-site-drupal).

You should discuss with your tech lead to decide the style that fits your project best.

### Branch naming conventions

```
feature/[PROJECT_CODE]-[ISSUE_NO]-[LOWER_CASE_DESCRIPTION]
```

**Example**

```
feature/BSD-64-robo-validate
```

### Commit style

```
BSD fixes #64: Fixed coding standards issues.
```

## Getting started

This branch installs Vite and USWDS. To get started run the npm install command.

```
npm install
```

Run the local environment with the start command.

```
npm start
```

You should get a local server at `http://localhost:5173/`.
