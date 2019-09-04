import { h } from 'preact'
import { Component } from 'preact'
import { shouldComponentUpdate } from './lib'

export default class Select extends Component {
  constructor() {
    super()
    /** @type {!_depackForm.SelectProps} */
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
  render(props) {
    const { options, name, value, required, className, defaultText } =
      /** @type {!_depackForm.SelectProps} */ (props)
    const c = className ? ` ${className}` : ''
    const { onChange, hid, id, values = {} } = this.context
    const rendered = name in values // for SSR
    const selectValue = rendered ? values[name] : value
    return (     h('select',{
      'name':name,
      'value':selectValue !== undefined ? selectValue : '',
      'className':`custom-select${c}`,
      'required':required,
      'id':id,
      'aria-describedby':hid,
      'onChange':(e) => {
        onChange(name, e.currentTarget.value)
      }},
      h('option',{'value':''},defaultText),
      options.map(({ value: v, title }) => {
        return h('option',{'key':v,'value':v,'selected':v==value},
          title,
        )
      }),
    ))
  }
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').SelectProps} _depackForm.SelectProps
 */