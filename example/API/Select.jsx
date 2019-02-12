import { format } from './'
/* start example */
import { Select } from '../../src'

const Example = () => (
  <Select name="example" required
    options={[
      { value: 1, title: 'hello' },
    ]}>
  </Select>
)
/* end example */

console.log(format(<Example />))