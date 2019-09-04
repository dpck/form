import makeTestSuite from '@zoroaster/mask'
import { equal } from '@zoroaster/assert'
import IdioContext from '../context/Idio'
import RemoteChrome from '../context/RemoteChrome'

export const Chrome = makeTestSuite('test/result/chrome.jsx', {
  /**
   * @param {string} input
   * @param {RemoteChrome} i
   * @param {IdioContext} i
   */
  async getResults({ Page, Runtime, client }, { start }, { log }) {
    log(client)
    const { action, pre } = this
    const url = await start({
      pre,
      input: this.input,
    })

    await Page.navigate({ url })
    await Page.loadEventFired()
    let actionValue
    if (action) {
      const s = await Runtime.evaluate({ expression: action,
        awaitPromise: true })
      handleError(s)
      if (s.result) actionValue = s.result.value
    }
    const res = await Runtime.evaluate({ expression: 'window.idio.format(document.querySelector(\'html body\'), 0).innerHTML.trim()' })
    handleError(res)
    const { result: { value } } = res
    const v = value.replace(/(<input[\s\S]*?)>/g, (m, i) => {
      return `${i} />`
    })
    return { actionValue, actual: `(${v})` }
  },
  mapActual({ actual }) {
    return actual
  },
  assertResults({ actionValue }, { actionValue: av }) {
    if (av) equal(`'${actionValue}'`, av)
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

const handleError = (res) => {
  const { exceptionDetails } = res
  if (exceptionDetails) {
    throw new Error(exceptionDetails.exception.description)
  }
}