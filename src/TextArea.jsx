import { Component } from 'preact'
import { shouldComponentUpdate } from './lib'

/**
 * The `<textarea>` element.
 */
export default class TextArea extends Component {
  constructor() {
    super()
    /**
     * @type {TextAreaProps}
     */
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
  render({
    rows = 3, required, name, placeholder, children,
  }) {
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

/* documentary types/TextArea.xml */
/**
 * @typedef {Object} TextAreaProps Options for the TextAreaProps component.
 * @prop {boolean} [required] Whether this is a required field.
 * @prop {string} [name] The textarea name.
 * @prop {string} [placeholder] The textarea placeholder.
 * @prop {number} [rows=3] How many rows should the textarea have. Default `3`.
 */
