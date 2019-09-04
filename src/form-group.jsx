import { Component } from 'preact'

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
  render({ children, label, help, details, className, 'form-row': formRow, row = formRow, labelClassName, invalid, valid }) {
    const c = [
      'form-group', className,
      row ? `${formRow ? 'form-' : ''}row` : null,
    ]
      .filter(Boolean).join(' ') || undefined

    const lc = [row ? 'col-form-label' : null, labelClassName]
      .filter(Boolean).join(' ') || undefined

    const lbl = label ? <label
      className={lc}
      htmlFor={this.id}>{label}</label> : null

    const he = <Help help={help} hid={this.hid} invalid={invalid} valid={valid}/>

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

const Help = ({ help, hid, invalid, valid }) => {
  let cc = 'text-muted'
  if (invalid) cc = 'invalid-feedback'
  else if (valid) cc = 'valid-feedback'
  const c = `form-text ${cc}`
  if (typeof help != 'string') {
    return (<small id={hid} className={c}>
      {help}
    </small>)
  }
  return (<small id={hid} className={c}
    dangerouslySetInnerHTML={{ __html: help }}/>)
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').FormGroupProps} _depackForm.FormGroupProps
 */