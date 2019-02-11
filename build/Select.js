import { h } from 'preact'
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
    return                                                      h('select',{'name':name,'value':values[name],'required':required,'className':"custom-select",'id':id,'aria-describedby':hid,'onChange':(e) => {
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
