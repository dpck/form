// returns the correct output
<Form></Form>

/* expected */
<form></form>
/**/

// creates FormGroup
<FormGroup label="test" help="ok">
  <Input placeholder="test"/>
</FormGroup>

/* expected */
<div class="form-group">
  <label htmlFor="i70984">test</label>
  <input placeholder="test"
    class="form-control" type="text"
    aria-describedby="hi70984" id="i70984" />
  <small id="hi70984"
    class="form-text text-muted">ok
  </small>
</div>
/**/