const countBits = (n : number) => {
  return Array.from({length: n + 1}, (v,i) => i).map(v => countChar(v.toString(2)))
}

function countChar(str: string): number {
    let count = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '1') count++
    }
    return count
}