# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/starter)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```astro
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
│   └── cjw-caricature.ico
│   └── logo.svg
│   └── post/
│       └── example-post/
│           └── hero.jpg
│           └── content-image.jpg
│           └── gallery-example/
│               └── gallery-image.png
├── src/
│   ├── components/
│   │   └── Header.astro
│   │   └── SVGs/
│   │       └── Facebook.astro
│   └── galleries/
│       └── ExampleGallery.astro
│   └── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│   │   └── index.astro
│   │   └── category/
│   │       └── [category].astro
│   │   └── post/
│   │       └── example..md
│   └── styles/
│   │   └── global.css
│   │   └── home.css
│   └── utilities/
│   │   └── index.js
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `yarn install`    | Installs dependencies                        |
| `yarn start`      | Starts local dev server at `localhost:3000`  |
| `yarn build`      | Build your production site to `./dist/`      |
| `yarn preview`    | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/withastro/astro) or jump into our [Discord server](https://astro.build/chat).



## TODO
* open images in larger view in gallery component
* pagination between posts
* fix inconsistent widths on post list. Probably write some longer excerpts to fix...
