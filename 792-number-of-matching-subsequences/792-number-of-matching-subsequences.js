/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = function(s, words) {
    let count = 0;
    
    for(const e of words) {
        if(findSubsequence(s,e)) count++
    }
    return count
};

const findSubsequence = (s,w) => {
    let idx = -1; 
    for(const c of w) {
        const findIdx = s.indexOf(c, idx+1)
        if(findIdx === -1) return false
        else idx = findIdx
    }
    return true
}