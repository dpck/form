import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import form from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await form({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
