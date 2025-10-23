var ENVIRONMENT = {
}
const BUILTINS = {
  "+": (left, right) => left + right,
}

const isPrimitive = (expr) => {
  return typeof(expr) == "number"
}
const isSymbol = (expr) => {
  return typeof(expr) == "string"
}
const isDefine = (expr) => {
  [formName, ...rest] = expr
  return formName == "define" && rest
}
const isProcedureCall = (expr) => {
  return Array.isArray(expr)
}

const eval = (expr) => {
  if (isPrimitive(expr)) {
    return expr
  }
  if (isDefine(expr)) {
    [_, name, value] = expr
    ENVIRONMENT[name] = value
    return
  }
  if (isSymbol(expr)) {
    return ENVIRONMENT[expr]
  }
  if (isProcedureCall(expr)) {
    [procName, ...args] = expr
    return apply(procName, args)
  }
}

const apply = (procName, args) => { 
  if (procName in BUILTINS) {
    const builtinFn = BUILTINS[procName]
    return builtinFn(...args)
  }
  throw "error"
}

module.exports = {
  eval: eval,
}
