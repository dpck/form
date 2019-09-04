import { h } from 'preact'
import { Component } from 'preact'
import Help from './help'

/**
 * The div with `form-group` class to hold the label, input, help and validation message.
 */
export default class FormGroup extends Component {
  constructor() {
    super()
    this.id = `i${Math.floor(Math.random() * 100000)}`
    this.hid = `h${this.id}`
    /** @type {!_depackForm.FormGroupProps} */
    this.props = this.props
  }
  getChildContext() {
    return {
      id: this.id,
      hid: this.hid,
    }
  }
  /**
   * @param {!_depackForm.FormGroupProps} [props]
   */
  render({ children, label, help, details, className, 'form-row': formRow, row = formRow, labelClassName }) {
    const c = [
      'form-group', className,
      row ? `${formRow ? 'form-' : ''}row` : null,
    ]
      .filter(Boolean).join(' ') || undefined

    const lc = [row ? 'col-form-label' : null, labelClassName]
      .filter(Boolean).join(' ') || undefined

    const lbl = label ?   h('label',{
      'className':lc,
      'htmlFor':this.id},label) : null

    const he = ( h(Help,{help:help, hid:this.hid })) // ignore validation

    if (details) {
      return (
                 h('details',{'className':c},
          h('summary',{},
            lbl,
          ),
          children,
          row ? h('div',{'className':"col-12"},he) : he,
        )
      )
    }

    return (   h('div',{'className':c},
      lbl,
      children,
      row ? h('div',{'className':"col-12"},he) : he,
    ))
  }
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').FormGroupProps} _depackForm.FormGroupProps
 */