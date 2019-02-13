import { h } from '../preact.js'
import Form, { FormGroup, TextArea, Input, Select } from '../src/index.js'

const ExampleForm = ({ ...props }) => (                            h(Form,{...props},
  h(FormGroup,{label:"Input",help:"Type in something..."},
    h(Input,{name:"input",value:"hello-world"}),
  ),
  h(FormGroup,{label:"Select",help:"Please select..."},
    h(Select,{options:[
      {
        title: 'Free will',
        value: '1',
      },
      {
        title: 'Unfree will',
        value: '2',
      },
    ],name:"select",value:"2"}),
  ),
  h(FormGroup,{label:"TextArea",help:"Multiple row input..."},
    h(TextArea,{name:"textarea"},
      `One must still have chaos in oneself to be able to give birth to a dancing star.`
    ),
  ),
))

export default ExampleForm