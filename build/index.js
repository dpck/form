import { h } from 'preact'
import { Component } from 'preact'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      values: {},
    }
  }
  getChildContext() {
    return {
      values: this.state.values,
      onChange: this.onChange.bind(this),
    }
  }
  onChange(name, value) {
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    })
    if (this.props.onChange)
      this.props.onChange(this.state.values)
  }
  render({ children }) {
    return  h('form',{},
      children,
    )
  }
}

export class FormGroup extends Component {
  constructor() {
    super()
    this.id = `i${Math.floor(Math.random() * 100000)}`
    this.hid = `h${this.id}`
  }
  getChildContext() {
    return {
      id: this.id,
      hid: this.hid,
    }
  }
  render() {
    const { children, label, help } = this.props
    return h('div',{'className':"form-group"},
      label && h('label',{'htmlFor':this.id},label),
      children,
      help && h('small',{'id':this.hid,'dangerouslySetInnerHTML':{ __html: help },'className':"form-text text-muted"}),
    )
  }
}

export { default as Select } from './Select'
export { default as TextArea } from './TextArea'
export { default as Input } from './Input'