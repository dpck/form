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
    return <form>
      {children}
    </form>
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