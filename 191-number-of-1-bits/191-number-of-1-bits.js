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
            n = (n / 2) - 0.5 //오차피 2닉한 0.5만 나옴
        } else n = n / 2
    }
    
    return count
};