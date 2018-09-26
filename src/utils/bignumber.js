export const max = (a: Object, b: Object) => {
  return a.gt(b) ? a : b
}

export const min = (a: Object, b: Object) => {
  return b.gt(a) ? b : a
}
