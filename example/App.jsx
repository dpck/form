import {
  Form, FormGroup, TextArea, Input, Select,
} from '../src'
import { render, Component } from 'preact'
import 'preact/devtools/'

class Main extends Component {
  render() {
    const form = <Form onChange={(values) => {
      this.setState(values)
    }}>
      <FormGroup label="Input" help="Type in something...">
        <Input name="input" value="hello-world" />
      </FormGroup>
      <FormGroup label="Select" help="Please select...">
        <Select name="select" value="2" options={[
          {
            title: 'Free will',
            value: '1',
          },
          {
            title: 'Unfree will',
            value: '2',
          },
        ]} />
      </FormGroup>
      <FormGroup label="TextArea" help="Multiple row input...">
        <TextArea name="textarea">
          One must still have chaos in oneself to be able to give birth to a dancing star.
        </TextArea>
      </FormGroup>
    </Form>
    return (
      <div className="container">
        <h1>@Depack/Form</h1>
        <blockquote className="blockquote">
          The Preact component that creates and maintains
          the form state (designed for Depack bundler).
        </blockquote>
        <div className="row">
          <div className="col-sm-6">
            {form}
          </div>
          <div className="col-sm-6">
            <pre style="white-space: pre-wrap;">{
              JSON.stringify(this.state, null, 2)
            }</pre>
          </div>
        </div>
      </div>)
  }
}

render(<Main />, document.querySelector('#preact'))