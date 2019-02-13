import { h } from '../preact.js'
import { render, Component } from '../preact.js'
// import 'preact/devtools/'
import ExampleForm from './ExampleForm.js'

class Main extends Component {
  render() {
    return (
      h('div',{'className':"container"},
        h('h1',{},`@Depack/Form`),
        h('blockquote',{'className':"blockquote"},
          `The Preact component that creates and maintains
          the form state (designed for Depack bundler).`
        ),
        h('div',{'className':"row"},
          h('div',{'className':"col-sm-6"},
            h(ExampleForm,{onChange:(values) => {
              this.setState(values)
            }}),
          ),
          h('div',{'className':"col-sm-6"},
            h('pre',{'style':"white-space: pre-wrap;"},
              JSON.stringify(this.state, null, 2)
            ),
          ),
        ),
      ))
  }
}

render( h(Main), document.querySelector('#preact'))