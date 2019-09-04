import idio from '@idio/idio'
import frontend from '@idio/frontend'
import render from '@depack/render'
import jsx from '@a-la/jsx'

export default class IdioContext {
  /**
   * The context will start a server and serve the code given
   * @param {import('@idio/idio').MiddlewareConfig} config
   */
  async start(config = {}, port = null) {
    const { input, pre = '', ...conf } = config
    // this needs to be open for 172.31.12.175
    // run the proxy tunnel on 172.31.12.175:5000
    // make an image that has node and starts the js server
    //
    const inv = jsx(input, {
      quoteProps: 'dom',
    })
    const pree = jsx(pre, {
      quoteProps: 'dom',
    })
    const { app, url } = await idio({
      frontend: {
        async middlewareConstructor() {
          const f = await frontend({
            directory: ['src', 'test/context/idio', 'build'],
          })
          return f
        },
        use: true,
      },
      async serveJSX(ctx) {
        ctx.body = render(<html>
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
            <title>Hello, world!</title>
          </head>
          <script type="module" src="test/context/idio/math-random.js" />
          <script type="module" src="test/context/idio/format.js" />
          <script type="module" dangerouslySetInnerHTML={{
            __html: `import { h, render, Component } from '/node_modules/preact/src/preact.js'
/**/ import Form, { FormGroup, Input, TextArea, Select } from '/${process.env.ALAMODE_ENV=='test-build' ? 'build' : 'src'}/'
${pree}
const inv = ${inv}
render(inv, document.body)
`,
          }}>
          </script>
        </html>, { addDoctype: 1, pretty: 1 })
      },
      ...conf,

    }, { port })
    this.app = app
    this.url = url
    return this.url
  }
  async _destroy() {
    if (this.app)
      await this.app.destroy()
  }
}