import { makeTestSuite } from 'zoroaster'
import JSXContext from '@depack/context'
import Form from '../../src'

export default makeTestSuite('test/result/index.jsx', {
  /**
   * @param {string} input
   * @param {JSXContext} context
   */
  getResults(input, { getVNode, render }) {
    const vnode = getVNode(input, {
      Form,
    })
    const res = render(vnode)
    return res
  },
  context: JSXContext,
})
