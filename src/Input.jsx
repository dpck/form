import { Component } from 'preact'
import { shouldComponentUpdate, getClasses } from './lib'
import Help from './help'

export default class Input extends Component {
  constructor() {
    super()
    /** @type {!_depackForm.InputProps} */
    this.props = this.props
  }
  shouldComponentUpdate(newProps, __, newContext) {
    const res = shouldComponentUpdate.call(this, newProps, newContext)
    return res
  }
  componentDidMount() {
    const { value, name } = this.props
    const { onChange } = this.context
    if (value !== undefined && onChange) onChange(name, value)
  }
  /**
   * Triggers the onchange event on the form.
   * @param {string} value
   */
  onChange(value) {
    this.context.onChange(this.props.name, value)
  }
  /**
   * @param {!_depackForm.InputProps} [props]
   */
  render({
    required, name, placeholder, type = 'text', file, value, className,
    invalid, valid, help, ...props
  }) {
    const { colClasses, prop } = getClasses(props)
    const c = [
      `form-control${file ? '-file' : ''}`, className,
      invalid ? 'is-invalid' : null,
      valid ? 'is-valid' : null,
    ]
      .filter(Boolean).join(' ')
    const { hid, id, values = {} } = this.context
    const rendered = name in values // for SSR
    const input = (<input
      required={required}
      name={name}
      placeholder={placeholder}
      className={c}
      value={rendered ? values[name] : value}
      type={type}
      aria-describedby={hid}
      id={id}
      onChange={(e) => {
        this.onChange(e.currentTarget.value)
      }}
      {...prop}
    />)
    if (colClasses.length) {
      const he = help ? (<Help help={help} hid={this.hid} valid={valid} invalid={invalid} />) : null
      return (<div className={colClasses.join(' ')}>
        {input}
        {he}
      </div>)
    }
    return input
  }
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').InputProps} _depackForm.InputProps
 */