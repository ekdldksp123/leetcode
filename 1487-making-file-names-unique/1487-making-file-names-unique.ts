function getFolderNames(names: string[]): string[] {
  const map = new Map()
    
  for (const name of names) {
    if (!map.has(name)) {
      map.set(name, 1)
    } else {
      let length = map.get(name)
      let newName = `${name}(${length})`
      while (map.has(newName)) {
        newName = `${name}(${length++})`
      }
      map.set(newName, 1)
    }
  }
  return [...map.keys()]
}