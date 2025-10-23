var ENVIRONMENT = {
}

const isPrimitive = (expr) => {
  return typeof(expr) == "number"
}
const isSymbol = (expr) => {
  return typeof(expr) == "string"
}
const isDefine = (expr) => {
  [formName, rest] = expr
  return formName == "define" && rest
}

const eval = (expr) => {
  if (isPrimitive(expr)) {
    return expr
  }
  if (isDefine(expr)) {
    [_, name, value] = expr
    ENVIRONMENT[name] = value
  }
  if (isSymbol(expr)) {
    return ENVIRONMENT[expr]
  }
}

module.exports = {
  eval: eval,
}
