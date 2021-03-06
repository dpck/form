import { h } from 'preact'
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
  /**
   * @param {!_depackForm.TextAreaProps} [props]
   */
  render({ rows = 3, required, name, placeholder, children, ...props }) {
    const { hid, id, onChange, values = {} } = this.context
    const rendered = name in values // for SSR
    return h('textarea',{...props,
      'required':required,
      'name':name,
      'placeholder':placeholder,
      'aria-describedby':hid,
      'className':"form-control",
      'id':id,
      'onChange':(e) => {
        onChange(name, e.currentTarget.value)
      },
      'rows':rows},
        rendered ? values[name] : children
      )
  }
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').TextAreaProps} _depackForm.TextAreaProps
 */