import { makeTestSuite } from 'zoroaster'
import JSXContext from '@depack/context'
import Form, * as Form2 from '../../src'

export default makeTestSuite('test/result/index.jsx', {
  /**
   * @param {string} input
   * @param {JSXContext} context
   */
  getResults(input, { getVNode, render }) {
    const vnode = getVNode(input, {
      Form, ...Form2,
    })
    const res = render(vnode, {
      pretty: true,
    })
    return `(${res})`
  },
  context: [JSXContext, class Random {
    _init() {
      this.original = Math.random
      let seed = 1
      Math.random = () => {
        var x = Math.sin(seed++) * 10000
        return x - Math.floor(x)
      }
    }
    _destroy() {
      Math.random = this.original
    }
  }],
})