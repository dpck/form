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
  <label htmlFor="i70984">test</label>
  <input placeholder="test"
    class="form-control" type="text"
    aria-describedby="hi70984" id="i70984" />
  <small id="hi70984"
    class="form-text text-muted">ok
  </small>
</div>)
/**/

// Select
(<Select name="test" required value="1" options={[
  { value: 1, title: 'test' },
]} />)

/* expected */
(<select name="test" value="1" required
  class="custom-select">
  <option></option>
  <option value="1" selected>test</option>
</select>)
/**/

// TextArea
(<TextArea name="test" placeholder="test" required rows={5}>
  This is the default input of the textarea.
</TextArea>)

/* expected */
(<textarea required name="test"
  placeholder="test" class="form-control" rows="5">This is the default input of the textarea.</textarea>)
/**/

// Input
(<Input name="test" placeholder="test" required type="text" value="hello-world"/>)

/* expected */
(<input required name="test"
  placeholder="test" class="form-control"
  value="hello-world" type="text" />)
/**/