# @depack/form

[![npm version](https://badge.fury.io/js/%40depack%2Fform.svg)](https://npmjs.org/package/@depack/form)

`@depack/form` is The Bootstrap Form Component For Entering Data.

![@depack/form demo](doc/demo.gif)

```sh
yarn add -E @depack/form
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [**Form**](#form)
- [**FormGroup**](#formgroup)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default and named functions:

```js
import Form, {
  FormGroup, Input, TextArea, Select,
} from '@depack/form'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## **Form**

Creates the form that maintains the values of each field that is found inside its children. Any additional properties will be passed down to the form. Each child component will receive `values` in its context.

__<a name="type-form">`Form`</a>__: Options for the Form component.

|   Name   |    Type    |                                     Description                                     |
| -------- | ---------- | ----------------------------------------------------------------------------------- |
| onChange | _function_ | The callback to call when a change is made to any of the inputs inside of the form. |

```jsx
import Form, {
  FormGroup, TextArea, Input, Select,
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
```
<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## **FormGroup**

The form group is used to represent logic combination of a label, input, help text and validation error message. The _FormGroup_ component generates `id` and `hid` values and passes them to children components in the context.



```jsx
import Form, { FormGroup, Input } from '@depack/form'

const Example = () => (
  <Form>
    <FormGroup
      label="What is your name?"
      help="Your name, your name, what is your name?"
    >
      <Input />
    </FormGroup>
  </Form>
)
```
```html
<form>
  <div class="form-group">
    <label htmlFor="i57030">
      What is your name?
    </label>
    <input class="form-control" type="text" aria-describedby="hi57030" id="i57030" />
    <small id="hi57030" class="form-text text-muted">
      Your name, your name, what is your name?
    </small>
  </div>
</form>
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>
      © <a href="https://artd.eco">Art Deco</a> for <a href="https://artd.eco/depack">Depack</a>
      2019
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif" alt="Tech Nation Visa" />
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks">Tech Nation Visa Sucks</a>
    </th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>