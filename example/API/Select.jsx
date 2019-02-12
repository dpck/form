import { format } from './'
/* start example */
import { Select } from '../../src'

const Example = () => (
  <Select name="example" required value="1"
    options={[
      { value: 1, title: 'hello' },
      { value: 2, title: 'world' },
    ]}>
  </Select>
)
/* end example */

console.log(format(<Example />))