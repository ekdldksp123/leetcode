/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
    if(n === 1) return true
    if(n <= 0) return false
    
    while(n > 1) {
        if(n % 3 <= 2 && n % 3 > 0) return false
        n = n / 3
    }
    return true
};