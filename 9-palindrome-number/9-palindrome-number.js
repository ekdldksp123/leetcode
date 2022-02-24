/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    const arr = String(x).split('').reverse();
    return String(x) === arr.join('');
};