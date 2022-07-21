/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const arr = [...ransomNote]
    
    for (const c of magazine) {
        const index = arr.indexOf(c)
        if (index > -1) arr.splice(index, 1)
        if (!arr.length) return true;
    }
    return false;
};