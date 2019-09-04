/**
 * Help messages for form-group and inputs.
 */
export default function Help({ help, hid, invalid, valid }) {
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