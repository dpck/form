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
  render({ children, ...props }) {
    return <form {...props}>
      {children}
    </form>
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
    return <div className="form-group">
      {label && <label htmlFor={this.id}>{label}</label>}
      {children}
      {help && <small id={this.hid} className="form-text text-muted" dangerouslySetInnerHTML={{ __html: help }}/>}
    </div>
  }
}

export { default as Select } from './Select'
export { default as TextArea } from './TextArea'
export { default as Input } from './Input'

/* documentary types/index.xml */
/**
 * @typedef {Object} FormProps Options for the Form component.
 * @prop {function} [onChange] The callback to call when a change is made to any of the inputs inside of the form.
 *
 * @typedef {Object} FormGroupProps
 * @prop {string} [label] The label to display for the group.
 * @prop {string} [help] The help text to show in `<small className="form-text text-muted">{help}</small>`
 */
