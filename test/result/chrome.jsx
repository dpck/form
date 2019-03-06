/* eslint-env browser */
import { Component } from 'preact'
import { TextArea, Select, Form, FormGroup, Input } from '../../src'

// Form
(<Form></Form>)

/* expected */
(<form></form>)
/**/

// FormGroup
(<FormGroup label="test" help="ok">
  <Input placeholder="test"/>
</FormGroup>)

/* expected */
(<div class="form-group">
  <label for="i70984">test</label>
  <input placeholder="test" class="form-control" type="text" aria-describedby="hi70984" id="i70984" />
  <small id="hi70984" class="form-text text-muted">ok</small>
</div>)
/**/

// Select
(<Select name="test" required value="1" options={[
  { value: 1, title: 'test' },
  { value: 2, title: 'test2' },
]} />)

/* expected */
(<select name="test" required="" class="custom-select">
  <option></option>
  <option value="1">test</option>
  <option value="2">test2</option>
</select>)
/**/

// TextArea
(<TextArea name="test" placeholder="test" required rows={5}>
  This is the default input of the textarea.
</TextArea>)

/* expected */
(<textarea required="" name="test" placeholder="test" class="form-control" rows="5">This is the default input of the textarea.</textarea>)
/**/

// Input
(<Input name="test" placeholder="test" required type="text" value="hello-world"/>)

/* expected */
(<input required="" name="test" placeholder="test" class="form-control" type="text" />)
/**/

// Reset
(<Form><App /></Form>)

/* pre */
class App extends Component {
  constructor() {
    super()
    this.state = { value: 'hello-world' }
  }
  render() {
    const { value } = this.state
    return (<Input required type="text" value={value} onClick={() => {
      this.setState({ value: 'new value' })
    }}/>)
  }
}
async function clickInput() {
  const input = document.querySelector('input')
  input.click()
  await new Promise(r => setTimeout(r, 1))
  return input.value
}
window.clickInput = clickInput
/**/

/* action */
clickInput()
/**/
/* actionValue */
'new value'
/**/

/* expected */
(<form>
  <input required="" class="form-control" type="text" />
</form>)
/**/