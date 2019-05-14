import { h } from 'preact'
import { Component } from 'preact'
import { shouldComponentUpdate } from './lib'

export default class Input extends Component {
  constructor() {
    super()
    /**
     * @type {!_depackForm.InputProps}
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
    if (value !== undefined && onChange) onChange(name, value)
  }
  /**
   * @param {!_depackForm.InputProps} props Options for the Input component.
   */
  render({
    required, name, placeholder, type = 'text', file, value, ...props
  }) {
    const { onChange, hid, id, values = {} } = this.context
    const rendered = name in values // for SSR
    return h('input',{...props,
      'required':required,
      'name':name,
      'placeholder':placeholder,
      'className':`form-control${file ? '-file' : ''}`,
      'value':rendered ? values[name] : value,
      'type':type,
      'aria-describedby':hid,
      'id':id,
      'onChange':(e) => {
        onChange(name, e.currentTarget.value)
      }
    })
  }
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').InputProps} _depackForm.InputProps
 */