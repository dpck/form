import { Component } from 'preact'

export class Form extends Component {
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

// export const FormRow = ({
//   type = 'text', placeholder, name, textarea,
//   required, file, value, options, selectedOption,
// }) => {
//   const commonProps = {
//     value, name, required,
//   }
//   const I = options ? <Select options={options} selectedOption={selectedOption} {...commonProps} /> : <Input textarea={textarea} placeholder={placeholder} type={type} file={file} {...commonProps}/>

//   return <div className="form-group">
//     {I}
//   </div>
// }

export const Select = ({
  options, name, value, required, id, hid,
}) => {
  return <select name={name} value={value} className="custom-select" required={required} id={id} aria-describedby={hid}>
    <option></option>
    {options.map(({ value: v, title }) => {
      return <option key={v} value={v} selected={v==value}>
        {title}
      </option>
    })}
  </select>
}

export { default as TextArea } from './TextArea'
export { default as Input } from './Input'