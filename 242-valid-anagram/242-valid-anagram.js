/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if(s.length !== t.length) return false
    return JSON.stringify([...s].sort()) === JSON.stringify([...t].sort())
};