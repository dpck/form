import { h } from 'preact'
import { Component } from 'preact'

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
  /**
   * @param {FormProps} props Options for the Form component.
 * @param {function} [props.onChange] The callback to call when a change is made to any of the inputs inside of the form.
 * @param {function} [props.formRef] The function to call with the reference to the form HTML.
 * @param {function} [props.onSubmit] The function to call on form submit.
   */
  render({ children, formRef, onSubmit, ...props }) {
    return    h('form',{...props,'ref':formRef, 'onSubmit':onSubmit},
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

export { default as Select } from './Select'
export { default as TextArea } from './TextArea'
export { default as Input } from './Input'

/* documentary types/index.xml */
/**
 * @typedef {Object} FormProps Options for the Form component.
 * @prop {function} [onChange] The callback to call when a change is made to any of the inputs inside of the form.
 * @prop {function} [formRef] The function to call with the reference to the form HTML.
 * @prop {function} [onSubmit] The function to call on form submit.
 *
 * @typedef {Object} FormGroupProps Options for the FormGroup component.
 * @prop {string} [label] The label to display for the group.
 * @prop {string} [help] The help text to show in `<small className="form-text text-muted">{help}</small>`
 */
