import { h } from 'preact'
import { Component } from 'preact'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      values: {},
    }
    /** @type {!_depackForm.FormProps} */
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
  render(props) {
    const { children, formRef, onSubmit, onChange, ...prop } =
      /** @type {!_depackForm.FormProps} */ (props)
    return    h('form',{...prop,'ref':formRef, 'onSubmit':onSubmit},
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
    /** @type {!_depackForm.FormGroupProps} */
    this.props = this.props
  }
  getChildContext() {
    return {
      id: this.id,
      hid: this.hid,
    }
  }
  render(props) {
    const { children, label, help } =
      /** @type {!_depackForm.FormGroupProps} */ (props)
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
 * @param {!_depackForm.SubmitButtonProps} props Options for the SubmitButton component.
 */
export const SubmitButton = ({ loading, confirmText, loadingText = confirmText, className, type = 'primary', outline = false }) => {
  const classes = ['btn', `btn-${outline ? 'outline-' : ''}${type}`, className].filter(Boolean)
  return (h('button',{ 'className':classes.join(' '),'type':"submit", 'disabled':loading},
    loading && h('span',{'className':`spinner-border spinner-border-sm${loadingText ? ' mr-2' : ''}`,'role':"status",'aria-hidden':"true"}),
    loading ? loadingText : confirmText,
  ))
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').FormProps} _depackForm.FormProps
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').FormGroupProps} _depackForm.FormGroupProps
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').SubmitButtonProps} _depackForm.SubmitButtonProps
 */