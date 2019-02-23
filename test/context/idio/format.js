function format(node, level) {
  var indentBefore = new Array(level++ + 1).join('  '),
    indentAfter  = new Array(level - 1).join('  '),
    textNode

  for (var i = 0; i < node.children.length; i++) {
    textNode = document.createTextNode('\n' + indentBefore)
    node.insertBefore(textNode, node.children[i])
    format(node.children[i], level)
    if (node.lastElementChild == node.children[i]) {
      textNode = document.createTextNode('\n' + indentAfter)
      node.appendChild(textNode)
    }
  }
  return node
}

window.idio = { format }