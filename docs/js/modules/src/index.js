import { h } from '../preact.js'
import { Component } from '../preact.js'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      values: {},
    }
    /**
     * @type {FormProps}
     */
    this.props = this.props
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
  render({ children, ...props }) {
    return     h('form',{...props},
      children,
    )
  }
}

/**
 * The div with `form-group` class to hold the label, input, help and validation message.
 */
export class FormGroup extends Component {
  constructor() {
    super()
    this.id = `i${Math.floor(Math.random() * 100000)}`
    this.hid = `h${this.id}`
    /**
     * @type {FormGroupProps}
     */
    this.props = this.props
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

export { default as Select } from './Select.js'
export { default as TextArea } from './TextArea.js'
export { default as Input } from './input.js'

/* documentary types/index.xml */
/**
 * @typedef {Object} FormProps Options for the Form component.
 * @prop {function} [onChange] The callback to call when a change is made to any of the inputs inside of the form.
 *
 * @typedef {Object} FormGroupProps
 * @prop {string} [label] The label to display for the group.
 * @prop {string} [help] The help text to show in `<small className="form-text text-muted">{help}</small>`
 */
