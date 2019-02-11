import render from 'preact-render-to-string'

export const format = (e) => {
  let level = 0
  let prevClosing
  const s = render(e)
    .replace(/<.+?>/g, (m) => {
      const closing = /<\//.test(m)
      const selfClosing = /\/>/.test(m)
      if (closing) level --
      else if (!selfClosing) level ++
      if (level < 0) level = 0
      const ws = '  '.repeat(level)
      if (closing) {
        const pws = prevClosing ? '' : `\n${ws}`
        prevClosing = true
        return `\n${ws}${m}${pws}`
      }
      return `${m}\n${ws}`
    })
  return s
}