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
    await Network.enable()
    await Page.enable()
    this.client = client
    this._Page = Page
    this._Runtime = Runtime
    this.Network = Network
    console.log('[%s]: %s', c('RemoteChrome', 'red'), b('Page enabled', 'green'))
  }
  static get _timeout() {
    return 10000
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
    if (this.client) {
      await this.client.close()
    }
  }
}