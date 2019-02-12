import { format } from './'
import rnd from './random'
/* start example */
import { TextArea } from '../../src'

const Example = () => (
  <TextArea name="example" rows="4" required
    placeholder="enter the multiline value...">
    Hello World
  </TextArea>
)
/* end example */

console.log(format(<Example />))