/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    let count = 0
    const compare = [...magazine]
    
    for(const e of ransomNote) {
        if(compare.includes(e)) {
            compare.splice(compare.indexOf(e), 1)
            count++
        }
    }
    if(count === ransomNote.length) return true
    else return false
};