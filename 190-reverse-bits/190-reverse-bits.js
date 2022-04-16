/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
    const numStr = n.toString(2).padStart(32, '0')
    const reverseStr = [...numStr].reverse().join('')
    return parseInt(reverseStr,2)
};