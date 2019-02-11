import core from '@idio/core'
import render from 'preact-render-to-string'

(async () => {
  const { url } = await core({
    frontend: { directory: ['example', 'src'] },
    serve(ctx) {
      ctx.body = '<!doctype html>' + render(<html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"/>
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
          <script type="module" src="/example/App.jsx"/>
        </body>
      </html>)
    },
  })
  console.log('%s', url)
})()