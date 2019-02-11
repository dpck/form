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
        const r = `${prevOpening ? '' : `\n${wws}`}${m}\n${ws}`
        prevOpening = true
        return r
      } else if (closing) {
        const r = `\n${ws}${m}`
        prevOpening = false
        return r
      } else {
        const r = `\n${ws}${m}\n${ws}`
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