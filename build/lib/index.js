/**
 * Allows for changes in values via properties, and for updates originated for the Form Model update via the context. Also fires onChange with the new value from properties.
 * @this {!preact.Component}
 */
export const shouldComponentUpdate = function (newProps, newContext) {
  const { name, value } = this.props
  const { value: newValue } = newProps
  const newContextValue = this.context.values[name] != newContext.values[name]
  if (newContextValue) return true

  const nw = value != newValue
  if (nw) {
    if (newContext.onChange) newContext.onChange(newProps.name, newValue)
    return false
  }
}

/**
 * Extracts col classes from props and returns new props without them.
 * @param {Object} props
 */
export const getClasses = (props) => {
  const colClasses = []
  const prop = Object.entries(props).reduce((acc, [key, value]) => {
    if (key == 'col' || key.startsWith('col-')) {
      colClasses.push(key)
      return acc
    }
    acc[key] = value
    return acc
  }, {})
  return { colClasses, prop }
}