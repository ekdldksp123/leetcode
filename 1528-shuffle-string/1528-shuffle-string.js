/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
    const map = new Map()
    
    for(let i = 0 ; i < indices.length; i ++) {
        map.set(indices[i], s[i])
    }
    
    return [...map].sort((x,y) => x[0] - y[0]).map(([key, value]) => value).join('')
}