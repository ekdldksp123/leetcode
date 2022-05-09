/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
    let count = 0
    
    if(n === 0) return n
    while(n > 0) {
        if(n % 2 === 1) {
            count ++
            n = Math.floor(n / 2)
        } else n = n / 2
    }
    
    return count
};