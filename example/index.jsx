import idio from '@idio/idio'
import render from '@depack/render'
import frontend from '@idio/frontend'

(async () => {
  const { url } = await idio({
    frontend: {
      async middlewareConstructor() {
        const f = await frontend({
          directory: ['example', 'src'],
        })
        return f
      },
      use: true,
    },
    // frontend: { directory:  },
    async api(ctx, next) {
      if (ctx.path == '/form') {
        ctx.body = { data: 'ok', error: null }
      } else await next()
    },
    serve(ctx) {
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
    },
  }, { port: null })
  console.log('%s', url)
})()