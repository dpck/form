import idio from '@idio/idio'
import render from '@depack/render'

(async () => {
  const { url, router, app } = await idio({
    frontend: {
      use: true,
      directory: ['example', 'src'],
    },
  })
  app.use(router.routes())
  router.post('/form', (ctx) => {
    ctx.body = { data: 'ok', error: null }
  })
  router.get('/', (ctx) => {
    ctx.body = render(<html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <title>Form Example</title>
        <style>
          {`body {
            background: #dfffdf;
          }`}
        </style>
      </head>
      <body id="preact">
        <script type="module" src="/node_modules/preact/dist/preact.umd.js"/>
        <script type="module">
          window.h = preact.h
        </script>
        <script type="module" src="/example/App.jsx"/>
      </body>
    </html>, { addDoctype: true })
  })
  console.log('%s', url)
})()