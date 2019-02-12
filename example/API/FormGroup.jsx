import { format } from './'
import rnd from './random'
/* start example */
import Form, { FormGroup, Input } from '../../src'

const Example = () => (
  <Form>
    <FormGroup
      label="What is your name?"
      help="Your name, your name, what is your name?"
    >
      <Input />
    </FormGroup>
  </Form>
)
/* end example */

console.log(format(<Example />))