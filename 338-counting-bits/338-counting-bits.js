/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
    const result = []
    const arr = Array.from({length: n + 1}, (v,i) => i).map(v => v.toString(2))
    
    for(const e of arr) {
        result.push([...e].filter(char => char === '1').length)
    }
    
    return result
};