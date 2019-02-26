import { makeTestSuite } from 'zoroaster'
import IdioContext from '../context/Idio'
import RemoteChrome from '../context/RemoteChrome'

export const Chrome = makeTestSuite('test/result/chrome.jsx', {
  /**
   * @param {string} input
   * @param {RemoteChrome} i
   * @param {IdioContext} i
   */
  async getResults(input, { Page, Runtime, client }, { start }, { log }) {
    log(client)
    // const { Page, Runtime }, { start } = adc
    const u = await start({
      // jsx
      input,
    }, 5005)
    const url =
    // u.replace('localhost:5005',
    // 'https://4353fbdc.ngrok.io' //) how to tunnel to docker
    'https://5595d89f.ngrok.io'
    // run proxy server on 9221 that

    await Page.navigate({ url })
    await Page.loadEventFired()
    const res = await Runtime.evaluate({ expression: 'window.idio.format(document.querySelector(\'html body\'), 0).innerHTML.trim()' })
    const { result: { value }, exceptionDetails } = res
    if (exceptionDetails) {
      throw new Error(exceptionDetails.exception.description)
    }
    const v = value.replace(/(<input[\s\S]*?)>/g, (m, i) => {
      return `${i} />`
    })
    return `(${v})`
  },
  context: [IdioContext, class Log {
    log(client) {
      this.stdoutWritten = 0
      this.client = client
      this.f = () => {
        this.stdoutWritten++
        process.stdout.write('.')
      }
      client.on('Network.requestWillBeSent', this.f)
    }
    _destroy() {
      this.client.removeListener('Network.requestWillBeSent', this.f)
      if (this.stdoutWritten) {
        process.stdout.write(`\r${' '.repeat(this.stdoutWritten)}\r`)
      }
    }
  }],
  persistentContext: [RemoteChrome],
})