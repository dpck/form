import { Component } from 'preact'

export default class Select extends Component {
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
    options, name, value, required,
  }) {
    const { onChange, hid, id, values } = this.context
    const rendered = name in values // for SSR
    return <select
      name={name}
      value={rendered ? values[name] : value}
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
