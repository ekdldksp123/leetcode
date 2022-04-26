function getFolderNames(names: string[]): string[] {
  const map = new Map()
  const res: string[] = []
    
  for (const name of names) {
    if (!map.has(name)) {
      map.set(name, 1)
      res.push(name)
    } else {
      let length = map.get(name);
      let newName = `${name}(${length})`
      while (map.has(newName)) {
        newName = `${name}(${length++})`
      }
      map.set(newName, 1)
      res.push(newName)
    }
  }
  return res
}