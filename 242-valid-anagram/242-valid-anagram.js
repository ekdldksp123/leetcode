/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    return JSON.stringify([...s].sort()) === JSON.stringify([...t].sort())
};