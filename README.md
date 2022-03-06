# Slushman Astro site

Built with [Astro](https://astro.build)
## 🚀 Project Structure

This is basic structure of the Astro project:

```astro
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
│   └── cjw-caricature.ico
│   └── logo.svg
|   └── gallery/
|       └── gallery-name/
│           └── gallery-image-1.jpg
│           └── gallery-image-2.jpg
│           └── gallery-image-3.jpg
│   └── post/
│       └── past-name/
│           └── hero.jpg
│           └── image-in-content.jpg
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
│   │   └── 404.astro
│   │   └── index.astro
│   │   └── category/
│   │       └── [category].astro
│   │   └── post/
│   │       └── example.md
│   └── styles/
│   │   └── global.css
│   │   └── home.css
│   └── utilities/
│   │   └── index.js
└── package.json
```

The public/gallery contains each image gallery's images. Gallery names should be unique.

Any static assets, like images, can be placed in the `public/` directory.

The public/images folder contains all images used for posts. Each folder needs to match the slug for the post, which is also the name of the*.md file for that post. To add the hero image for a post, put an image named hero.jpg in the post folder. Add any other images used in the content in that same folder.

Example:

Post file: 'example-post.md'
Public/post folder: 'example-post'

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `yarn install`    | Installs dependencies                        |
| `yarn start`      | Starts local dev server at `localhost:3000`  |
| `yarn build`      | Build your production site to `./dist/`      |
| `yarn preview`    | Preview your build locally, before deploying |

## Adding content

### Post

Add a new file to the src/pages/post folder as an .md file. The slug for the post is the name of the file.

### Gallery

Add a new gallery component to the src/galleries folder. Duplicate one of the existing examples.

Add a new folder in the public/gallery folder. The new folder name needs to match the "gallery" prop used in the src/galleries component.

Add images for the gallery in this new folder. At this point, they should all be PNG files.

### Publish

Commit all the changes and push to the GitHub repo. The Netlify site will automatically detect changes and republish the site.
