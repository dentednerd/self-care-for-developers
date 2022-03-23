# Self Care for Developers

A hub of useful information regarding the care and feeding of software developers, curated by software developers.

## Requirements

- [Node](https://nodejs.org/en/) v16.13.0
- [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli) v4.6.1

## Tech

- [Gatsby](https://www.gatsbyjs.com/) v4.6.2
  - with [React](https://reactjs.org/) v17
  - with [ESLint](https://eslint.org/) v7
- [Stitches](https://stitches.dev/) v1.2.6
- [Storybook](https://storybook.js.org/) v6.4.18

## Usage

```sh
git clone https://github.com/dentednerd/self-care-for-developers.git
cd self-care-for-developers
yarn
yarn start
```

The website will be available on [http://localhost:8000](http://localhost:8000).

The GraphQL playground will be available on [http://localhost:8000/___graphql](http://localhost:8000/___graphql).

To access Storybook, run `yarn storybook` in a separate terminal; Storybook will be available on [http://localhost:6006/](http://localhost:6006/).

## Contributing

The `main` branch is protected; please develop on a branch and create a pull request.

### I want to contribute an article

This project doesn't use an external CMS; articles live in `src/articles` and are written in MDX format. Feel free to use React components in your article body as you wish!

You'll find `article-template.mdx` in the project root. Please make a copy of this file, paste it into `src/articles` and rename it in the format `article-title-in-kebab-case.mdx`. This filename will form part of the URL by which this article will be accessed when merged into `main`. Write your article, then commit and push to a branch and create a pull request.

### I want to create a new category for my article

Bringing a new category into existence is as simple as adding it into the `tags` array of your article's metadata. Gatsby will create a new category page on which your article will be visible.

However, one thing to be aware of is that the illustrations used in article headers are chosen based on the first of that article's `tags`. If that tag doesn't exist yet, the article illustration will default to `src/assets/undraws/DayOff`. If you'd prefer to have another illustration represent articles in your new category, please add a new case to the switch statement in `src/atoms/TagUndraw`, choosing an illustration from the imports at the top of the file. (See below if you'd prefer to add a new illustration.)

### I want to add a new illustration for the category I've created

The illustrations used for each category are sourced from [Undraw](https://undraw.co/illustrations) (hence the `src/assets/undraws` directory, and the `TagUndraw` component).

As much as possible, these illustrations should:

- use colours from the Stitches config
- use at least one theme colour that changes depending on light/dark mode

To achieve this:

1. Download your chosen SVG from Undraw and open it in your IDE.
1. Copy the SVG code into a new React component in `src/assets/undraws`. Be sure to update any instances of `xmlns:xlink` to `xmlnsXlink`, and also add the `aria-hidden="true"` attribute to the `<svg>` tag itself.
1. Create a story for your new component and open it up in Storybook for an optimal dev experience.
1. Using your best artistic judgement, scan the SVG code in your new component for colours (VSCode users: might I recommend [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) for this task?), and swap them out for colours declared in the Stitches config, using CSS variable syntax (e.g. to use the `title` theme colour, replace the colour hex with `var(--colors-title)`).
1. When you're happy with your colour choices, add your component to `src/assets/undraws/index.js`, import it into `src/atoms/TagUndraw`, and create a new case for your tag and illustration. Take a look at `TagUndraw` in Storybook to help you out with this.
