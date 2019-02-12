import { extractProps } from 'rexml'
import render from 'preact-render-to-string'

export const format = (e) => {
  let level = 0
  let prevOpening
  let prevTextArea
  const s = render(e)
    .replace(/<.+?>/g, (m) => {
      const closing = /<\//.test(m)
      const selfClosing = /\/>/.test(m)
      const opening = !closing && !selfClosing
      if (opening) {
        prevTextArea = /<textarea/.test(m)
      }
      if (closing) level --
      else if (!selfClosing) level ++
      if (level < 0) level = 0
      const ws = '  '.repeat(level)
      const wws = '  '.repeat(Math.max(0, level - 1))
      if (opening && prevTextArea) {
        prevTextArea = false
        const r = `${prevOpening ? '' : `\n${wws}`}${m}`
        return r
      } else if (closing && prevTextArea) {
        prevTextArea = false
        return m
      } else if (prevTextArea) {
        throw new Error('Text Area cannot contain tags.')
      } else if (opening) {
        const v = getAttrs(m, ws)
        const r = `${prevOpening ? '' : `\n${wws}`}${v}\n${ws}`
        prevOpening = true
        return r
      } else if (closing) {
        const r = `\n${ws}${m}`
        prevOpening = false
        return r
      } else {
        const v = getAttrs(m, ws)
        const r = `\n${ws}${v}\n${ws}`
        prevOpening = true
        return r
      }
      // if (closing) {
      //   // prevClosing = true
      //   return `\n${ws}${m}`
      // }
      // // const pws = !prevClosing ? '' : `\n${ws}`
      // // prevClosing = false
      // return `\n${ws}${m}`
    })
  return s
}

const getAttrs = (s, ws, maxWidth = 80) => {
  const [,tag,attrs,cl = ''] = /(<\w+ )(.+?)( \/)?>/.exec(s) || []
  if (!attrs) return s
  const wws = '  '
  let currentWidth = ws.length + tag.length
  const at = extractProps(attrs, false)
  let start = true
  const att = Object.keys(at).reduce((acc, key) => {
    const val = at[key]
    const k = `${key}="${val}"`
    const addNewLine = currentWidth + k.length > maxWidth
    if (addNewLine) currentWidth = ws.length + wws.length
    currentWidth += k.length
    const v = `${addNewLine ? `\n${ws}${wws}` : `${start ? '' : ' '}`}${k}`
    start = false
    return `${acc}${v}`
  }, `${tag}`)
  return `${att}${cl}>`
}