import CDP from 'chrome-remote-interface'
import { c, b } from 'erte'

export default class RemoteChrome {
  async _init() {
    let client
    client = await CDP({
      host: '172.31.12.175', //
      port: '9222',
    })
    const { Network, Page, Runtime } = client
    this.stdoutWritten = 0
    Network.requestWillBeSent((params) => {
      this.stdoutWritten++
      process.stdout.write('.')
      // console.log(params.request.url)
    })
    await Network.enable()
    await Page.enable()
    this.client = client
    this._Page = Page
    this._Runtime = Runtime
    console.log('[%s]: %s', c('RemoteChrome', 'red'), b('Page enabled', 'green'))
  }
  /**
   * The enabled page, write types for that
   */
  get Page() {
    return this._Page
  }
  /**
   * The runtime.
   */
  get Runtime() {
    return this._Runtime
  }
  async _destroy() {
    if (this.stdoutWritten) {
      process.stdout.write(`\r${' '.repeat(this.stdoutWritten)}\r`)
    }
    if (this.client) {
      await this.client.close()
    }
  }
}