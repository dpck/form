import { format } from './'
/* start example */
import { Input } from '../../src'

const Example = () => (
  <Input
    name="example"
    placeholder="enter the value..."
    value="initial value"
    type="text"
    required
  />
)
/* end example */

console.log(format(<Example />))