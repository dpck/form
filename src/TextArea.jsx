import { Component } from 'preact'
import { shouldComponentUpdate } from './lib'

/**
 * The `<textarea>` element.
 */
export default class TextArea extends Component {
  constructor() {
    super()
    /** @type {!_depackForm.TextAreaProps} */
    this.props = this.props
  }
  shouldComponentUpdate(newProps, __, newContext) {
    const res = shouldComponentUpdate.call(this, newProps, newContext)
    return res
  }
  componentDidMount() {
    const { children: [child], name } = this.props
    const { onChange } = this.context
    if (child) onChange(name, child.trim())
  }
  /** @param {!_depackForm.TextAreaProps} props */
  render({ rows = 3, required, name, placeholder, children }) {
    const { hid, id, onChange, values = {} } = this.context
    const rendered = name in values // for SSR
    return <textarea
      required={required}
      name={name}
      placeholder={placeholder}
      className="form-control"
      aria-describedby={hid}
      id={id}
      onChange={(e) => {
        onChange(name, e.currentTarget.value)
      }}
      rows={rows}>{
        rendered ? values[name] : children
      }</textarea>
  }
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').TextAreaProps} _depackForm.TextAreaProps
 */