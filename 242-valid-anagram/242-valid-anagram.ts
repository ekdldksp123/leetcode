function isAnagram(s: string, t: string): boolean {
    const sSorted:string = [...s].sort((x,y) => x.localeCompare(y)).join('')
    const tSorted:string = [...t].sort((x,y) => x.localeCompare(y)).join('')
    return sSorted === tSorted
};