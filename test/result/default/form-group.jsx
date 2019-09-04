import { TextArea, Select, Form, FormGroup, Input } from '../../src'

// default FormGroup
(<FormGroup label="test" help="ok">
  <Input placeholder="test"/>
</FormGroup>)

/* expected */
(<div class="form-group">
  <label for="i70984">test</label>
  <input placeholder="test"
    class="form-control" type="text"
    aria-describedby="hi70984" id="i70984" />
  <small id="hi70984"
    class="form-text text-muted">ok
  </small>
</div>)
/**/

// details FormGroup
(<FormGroup label="test" help="ok" details>
  <Input placeholder="test"/>
</FormGroup>)

/* expected */
(<details class="form-group">
  <summary>
    <label for="i70984">test</label>
  </summary>
  <input placeholder="test"
    class="form-control" type="text"
    aria-describedby="hi70984" id="i70984" />
  <small id="hi70984"
    class="form-text text-muted">ok
  </small>
</details>)
/**/

// row FormGroup
(<FormGroup label="test" help="ok" row>
  <Input placeholder="test"/>
</FormGroup>)

/* expected */
(<div class="form-group row">
  <label class="col-form-label"
    for="i70984">
    test
  </label>
  <input placeholder="test"
    class="form-control" type="text"
    aria-describedby="hi70984" id="i70984" />
  <div class="col-12">
    <small id="hi70984"
      class="form-text text-muted">ok
    </small>
  </div>
</div>)
/**/