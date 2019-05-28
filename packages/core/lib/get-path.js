
export function getPath(path, obj) {
  let val = obj
  let idx = 0
  
  while (idx < path.length) {
    if (val == null) {
      return
    }

    val = val[path[idx]]
    idx += 1
  }

  return val
}
