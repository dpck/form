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
  <input placeholder="test"
    class="form-control" type="text"
    aria-describedby="hi70984" id="i70984">
  <small id="hi70984"
    class="form-text text-muted">ok
  </small>
</div>)
/**/