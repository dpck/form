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
export { default as SubmitForm } from './SubmitForm'

/**
 * The button with `type="submit"` which can be loading with a spinner indicator.
 * @param {ButtonProps} props Options for the Button component.
 * @param {boolean} [props.loading=false] Whether the button should display as loading. Default `false`.
 * @param {string} [props.loadingText] The text to show during the loading progress.
 * @param {string} props.confirmText The text for the normal state.
 * @param {string} [props.className] The class name, such as `btn-success`.
 * @param {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark')} [props.type="primary"] The type of the button to add to the class as `btn-{type}`. Default `primary`.
 */
export const SubmitButton = (props) => {
  const { loading, loadingText, confirmText, className, type = 'primary' } = props
  const classes = ['btn', `btn-${type}`, className].filter(Boolean)
  return (h('button',{ 'className':classes.join(' '),'type':"submit", 'disabled':loading},
    loading && h('span',{'className':"spinner-border spinner-border-sm mr-2",'role':"status",'aria-hidden':"true"}),
    loading ? loadingText : confirmText,
  ))
}

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
 *
 * @typedef {Object} ButtonProps Options for the Button component.
 * @prop {boolean} [loading=false] Whether the button should display as loading. Default `false`.
 * @prop {string} [loadingText] The text to show during the loading progress.
 * @prop {string} confirmText The text for the normal state.
 * @prop {string} [className] The class name, such as `btn-success`.
 * @prop {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark')} [type="primary"] The type of the button to add to the class as `btn-{type}`. Default `primary`.
 */
