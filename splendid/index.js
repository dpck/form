import { join } from 'path'

const APP_DIR = 'splendid'
const PAGES_DIR = join(APP_DIR, 'pages')
const BUILD_DIR = 'docs'

const config = {
  layout: join(APP_DIR, 'layout/main.html'),
  appDir: APP_DIR,
  pagesDir: PAGES_DIR,
  pre: [
    {
      re: /{{ company }}/g,
      replacement: '[Depack](https://artd.eco/depack)',
    },
  ],
  postProcess: [
    {
      re: /{{ year }}/g,
      replacement: `${new Date().getFullYear()}`,
    },
  ],
  mount: '/form/',
  output: BUILD_DIR,
  url: 'https://dpck.github.io/form',
}

export default config