import { TextArea, Select, Form, Input } from '../../src'

// Form
(<Form></Form>)

/* expected */
(<form></form>)
/**/

// Select
(<Select name="test" required value="1" options={[
  { value: 1, title: 'test' },
]} />)

/* expected */
(<select name="test" value="1"
  class="custom-select" required>
  <option value></option>
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