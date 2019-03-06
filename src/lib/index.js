/**
 * Allows for changes in values via properties, and for updates originated for the Form Model update via the context. Also fires onChange with the new value from properties.
 */
export const shouldComponentUpdate = (newProps, newContext) => {
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