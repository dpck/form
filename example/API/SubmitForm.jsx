import { format } from './'
import rnd from './random'
/* start example */
import Form, { SubmitForm, Input } from '../../src'

class DataForm extends SubmitForm {
  render() {
    const { error, success, formLoading } = this.state
    return (<Form onSubmit={this.submit.bind(this)}>
      <Input name="example" />
      {error && `Error: ${error}`}
      {success && 'Success!'}
      <button type="submit" disabled={formLoading}>Submit</button>
    </Form>)
  }
}
const Example = () => (
  <DataForm path="/send-data" submitFinish={() => {
    console.log('hooray!')
  }} />
)
/* end example */

console.log(format(<Example />))