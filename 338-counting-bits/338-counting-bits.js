/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
    const result = []
    const arr = Array.from({length: n + 1}, (v,i) => i).map(v => v.toString(2))
    
    for(let i=0; i<arr.length; i++) {
        const map = new Map()
        let cnt = map.get(`${i}`) || 0
        
        for(const el of [...arr[i]]) {
            
            if(el === '1') map.set(`${i}`, cnt++)
        }
        result.push(cnt)
    }
    
    return result
};