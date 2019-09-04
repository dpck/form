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
    return <form ref={formRef} onSubmit={onSubmit} {...prop}>
      {children}
    </form>
  }
}

export { default as FormGroup } from './form-group'
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
  return (<button type="submit" className={classes.join(' ')} disabled={loading}>
    {loading && <span className={`spinner-border spinner-border-sm${loadingText ? ' mr-2' : ''}`} role="status" aria-hidden="true"/>}
    {loading ? loadingText : confirmText}
  </button>)
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').FormProps} _depackForm.FormProps
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').SubmitButtonProps} _depackForm.SubmitButtonProps
 */