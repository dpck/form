let seed = 1
Math.random = () => {
  var x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}