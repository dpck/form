export default class Input {
  shouldComponentUpdate(_, __, newContext) {
    const { name } = this.props
    return this.context.values[name] != newContext.values[name]
  }
  componentDidMount() {
    const { value, name } = this.props
    const { onChange } = this.context
    if (value !== undefined) onChange(name, value)
  }
  render ({
    required, name, placeholder, type, file,
  }) {
    const { onChange, hid, id, values } = this.context
    return <input
      required={required}
      name={name}
      placeholder={placeholder}
      className={`form-control${file ? '-file' : ''}`}
      value={values[name]}
      type={type}
      aria-describedby={hid}
      id={id}
      onChange={(e) => {
        onChange(name, e.currentTarget.value)
      }}
    />
  }
}