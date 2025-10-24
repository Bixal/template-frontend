# Frontend template repo

A simple starter for frontend projects with basic setup and best practices.

## What's included

You can also use these as references for your own projects.

- `.nvmrc` file for using the latest Node.js LTS version
- `.npmrc` file to lock dependency versions for better security
- `.editorconfig` for consistent code formatting

### Demos

Included are demo branches you can use or reference to help you setup specific tools. Included branches:

| Branch name | Description |
-- | ---
`feature/ci-example` | CI workflows with linting, formatting, and a11y checks.
`feature/vite-uswds` | USWDS, Vite, and modern SASS api setup.


## How to use this template

When you create a new repo from this template, you get the same file structure and files without the git history. So you can start cleanly and focus on things specific to your project.

Learn more at [Creating a repository from a template [GitHub]](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

After creating your repo, update `package.json` with your project details.

## Contributing

Set up branch naming and commit styles with your team. Here are some examples from the [Bixal website](https://github.com/Bixal/bixal-site-drupal):

### Branch names

```
feature/[PROJECT_CODE]-[ISSUE_NO]-[LOWER_CASE_DESCRIPTION]
```

**Example**

```
feature/BSD-64-robo-validate
```

### Commit messages

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

Run static analysis checks using Eslint recommended rules and Prettier for formatting

```
npm run lint
```

Run unit tests with Jest

```
npm test
```

Run accessibility scan with Pa11y (requires the dev server to be running)

```
npm run accessibility:pa11y
```

### USWDS

A default implementation of USWDS. Key files you should know:

- `src/assets/scss/_uswds-theme.scss`. The USWDS theme settings.
- `src/main.js`. Loads the USWDS styles and JS.

**Static assets**

For now, static assets are imported from `node_modules`.

Alternatively, you could add a plugin, like [`vite-plugin-static-copy`](https://www.npmjs.com/package/vite-plugin-static-copy) and use that to import the USWDS fonts and images into a gitignored `src` directory.
