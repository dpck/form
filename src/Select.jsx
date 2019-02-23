import { Component } from 'preact'

export default class Select extends Component {
  constructor() {
    super()
    /**
     * @type {SelectProps}
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
    if (onChange && value !== undefined) onChange(name, value)
  }
  render({
    options, name, value, required,
  }) {
    const { onChange, hid, id, values = {} } = this.context
    const rendered = name in values // for SSR
    const selectValue = rendered ? values[name] : value
    console.log('select value %s', selectValue)
    return <select
      name={name}
      value={selectValue}
      className="custom-select"
      required={required}
      id={id}
      aria-describedby={hid}
      onChange={(e) => {
        onChange(name, e.currentTarget.value)
      }}>
      <option></option>
      {options.map(({ value: v, title }) => {
        return <option key={v} value={v} selected={v==value}>
          {title}
        </option>
      })}
    </select>
  }
}

/* documentary types/Select.xml */
/**
 * @typedef {Object} SelectProps Options for the Select component.
 * @prop {boolean} [required] Whether this is a required field.
 * @prop {string} [name] The select name.
 * @prop {string} [value] The initial value.
 * @prop {Array<{value: *, title: string}>} [options] The array with options to render inside of the `select` element.
 */
