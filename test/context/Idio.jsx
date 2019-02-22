import core from '@idio/core'
import render from '@depack/render'
import jsx from '@a-la/jsx'

export default class IdioContext {
  /**
   * The context will start a server and serve the code given
   * @param {import('@idio/core').MiddlewareConfig} config
   */
  async start(config = {}, port = null) {
    const { input, ...conf } = config
    // this needs to be open for 172.31.12.175
    // run the proxy tunnel on 172.31.12.175:5000
    // make an image that has node and starts the js server
    //
    const { app, url } = await core({
      frontend: {
        directory: 'src',
      },
      async serveJSX(ctx) {
        const inv = jsx(input, {
          quoteProps: 'dom',
        })
        ctx.body = render(<html>
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
            <title>Hello, world!</title>
          </head>
          <script type="module" dangerouslySetInnerHTML={{
            __html: `
import { h, render } from '/node_modules/preact/dist/preact.mjs'
import Form, { FormGroup, Input, TextArea, Select } from '/src/'
render(${inv}, document.body)`,
          }}>
          </script>
        </html>, { addDoctype: 1, pretty: 1 })
      },
      ...conf,

    }, { port, host: '0.0.0.0' })
    this.app = app
    this.url = url
    // url.replace('localhost', '192.168.255.6')
    return this.url
  }
  async _destroy() {
    if (this.app)
      await this.app.destroy()
  }
}