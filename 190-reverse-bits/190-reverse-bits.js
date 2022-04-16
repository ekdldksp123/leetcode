/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
    const numStr = n.toString(2).padStart(32, '0')
    return parseInt([...numStr].reverse().join(''), 2)
};