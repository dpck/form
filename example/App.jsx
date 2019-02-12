import { render, Component } from 'preact'
// import 'preact/devtools/'
import ExampleForm from './ExampleForm'

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1>@Depack/Form</h1>
        <blockquote className="blockquote">
          The Preact component that creates and maintains
          the form state (designed for Depack bundler).
        </blockquote>
        <div className="row">
          <div className="col-sm-6">
            <ExampleForm onChange={(values) => {
              this.setState(values)
            }}/>
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