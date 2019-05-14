import { Component } from 'preact'
import { shouldComponentUpdate } from './lib'

export default class Select extends Component {
  constructor() {
    super()
    /**
     * @type {!_depackForm.SelectProps}
     */
    this.props = this.props
  }
  shouldComponentUpdate(newProps, __, newContext) {
    const res = shouldComponentUpdate.call(this, newProps, newContext)
    return res
  }
  componentDidMount() {
    const { value, name } = this.props
    const { onChange } = this.context
    if (onChange && value !== undefined) onChange(name, value)
  }
  /**
   * @param {!_depackForm.SelectProps} props
   */
  render({ options, name, value, required }) {
    const { onChange, hid, id, values = {} } = this.context
    const rendered = name in values // for SSR
    const selectValue = rendered ? values[name] : value
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

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').SelectProps} _depackForm.SelectProps
 */