import { h } from 'preact'
import { Component } from 'preact'
import { shouldComponentUpdate } from './lib'

export default class Select extends Component {
  constructor() {
    super()
    /**
     * @type {SelectProps}
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
  render({
    options, name, value, required,
  }) {
    const { onChange, hid, id, values = {} } = this.context
    const rendered = name in values // for SSR
    const selectValue = rendered ? values[name] : value
    return     h('select',{
      'name':name,
      'value':selectValue,
      'required':required,
      'className':"custom-select",
      'id':id,
      'aria-describedby':hid,
      'onChange':(e) => {
        onChange(name, e.currentTarget.value)
      }},
      h('option'),
      options.map(({ value: v, title }) => {
        return h('option',{'key':v,'value':v,'selected':v==value},
          title,
        )
      }),
    )
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
