import { Component } from 'preact'

export default class Input extends Component {
  constructor() {
    super()
    /**
     * @type {InputProps}
     */
    this.props = this.props
  }
  shouldComponentUpdate(_, __, newContext) {
    const { name } = this.props
    return this.context.values[name] != newContext.values[name]
  }
  componentDidMount() {
    const { value, name } = this.props
    const { onChange } = this.context
    if (value !== undefined) onChange(name, value)
  }
  render({
    required, name, placeholder, type = 'text', file, value,
  }) {
    const { onChange, hid, id, values = {} } = this.context
    const rendered = name in values // for SSR
    return <input
      required={required}
      name={name}
      placeholder={placeholder}
      className={`form-control${file ? '-file' : ''}`}
      value={rendered ? values[name] : value}
      type={type}
      aria-describedby={hid}
      id={id}
      onChange={(e) => {
        onChange(name, e.currentTarget.value)
      }}
    />
  }
}

/* documentary types/input.xml */
/**
 * @typedef {Object} InputProps Options for the Input component.
 * @prop {boolean} [required] Whether this is a required field.
 * @prop {string} [name] The input name.
 * @prop {string} [placeholder] The input placeholder.
 * @prop {string} [value] The initial value.
 * @prop {string} [type] The input type.
 */
