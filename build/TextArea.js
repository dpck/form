import { h } from 'preact'
import { Component } from 'preact'

/**
 * The `<textarea>` element.
 */
export default class TextArea extends Component {
  shouldComponentUpdate(_, __, newContext) {
    const { name } = this.props
    return this.context.values[name] != newContext.values[name]
  }
  componentDidMount() {
    const { children: [child], name } = this.props
    const { onChange } = this.context
    if (child) onChange(name, child.trim())
  }
  render({
    rows = 3, required, name, placeholder,
  }) {
    const { hid, id, onChange, values } = this.context
    return                                                      h('textarea',{'required':required,'name':name,'placeholder':placeholder,'aria-describedby':hid,'className':"form-control",'id':id,'onChange':(e) => {
        onChange(name, e.currentTarget.value)
      },'rows':rows},
        values[name]
      )
  }
}