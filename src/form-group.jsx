import { Component } from 'preact'
import Help from './help'
import { getClasses } from './lib';

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
  render({ children, label, help, details, className, 'form-row': formRow, row = formRow, labelClassName, ...props }) {
    const c = [
      'form-group', className,
      row ? `${formRow ? 'form-' : ''}row` : null,
    ]
      .filter(Boolean).join(' ') || undefined

    const { colClasses } = getClasses(props)

    const lc = [row ? 'col-form-label' : null, labelClassName, ...colClasses]
      .filter(Boolean).join(' ') || undefined

    const lbl = label ? <label
      className={lc}
      htmlFor={this.id}>{label}</label> : null

    const he = (<Help help={help} hid={this.hid} />) // ignore validation

    if (details) {
      return (
        <details className={c}>
          <summary>
            {lbl}
          </summary>
          {children}
          {row ? <div className="col-12">{he}</div> : he}
        </details>
      )
    }

    return (<div className={c}>
      {lbl}
      {children}
      {row ? <div className="col-12">{he}</div> : he}
    </div>)
  }
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').FormGroupProps} _depackForm.FormGroupProps
 */