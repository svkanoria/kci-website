# Dev Setup

## StoryBlok

Integrating with StoryBlok requires setting up a proxy from https to http, because StoryBlok preview requires our local Astro site to be served via https.

To do this, read:

- https://www.storyblok.com/faq/setup-dev-server-https-windows

I have WSL2 (Ubuntu) on Windows 11. Here are the steps I did:

1. In Windows PowerShell running in Admin mode:
   1. Install chocolatey package manager
   1. $ choco install mkcert
   1. $ mkcert -install
   1. $ mkcert -CAROOT // This gives the location of the filed generated. Open this folder and copy the files generated
1. In Ubuntu window:
   1. Install brew package manager
   1. $ brew install mkcert
   1. $ mkcert -CAROOT // Note the folder listed may not exist. Create it. Then paste the copied files in the folder.
   1. $ mkcert -install
   1. $ npm install -g local-ssl-proxy
   1. Add the following script to package.json: `"proxy": "mkcert -install && mkcert localhost && local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem"`
   1. In the project root folder, run `$ npm run proxy` and `$ npm run dev`
1. In StoryBlok set the visual editor location to https://localhost:3010

# Astro Starter Kit: Basics

```
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
