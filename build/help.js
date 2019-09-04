import { h } from 'preact'
/**
 * Help messages for form-group and inputs.
 */
export default function Help({ help, hid, invalid, valid }) {
  let cc = 'text-muted'
  if (invalid) cc = 'invalid-feedback'
  else if (valid) cc = 'valid-feedback'
  const c = `form-text ${cc}`
  if (typeof help != 'string') {
    return (  h('small',{'id':hid, 'className':c},
      help,
    ))
  }
  return (h('small',{'id':hid, 'className':c,
    'dangerouslySetInnerHTML':{ __html: help }}))
}