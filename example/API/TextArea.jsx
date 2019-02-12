import { format } from './'
/* start example */
import { TextArea } from '../../src'

const Example = () => (
  <TextArea name="example" required
    placeholder="enter the multiline value...">
    Hello World
  </TextArea>
)
/* end example */

console.log(format(<Example />))