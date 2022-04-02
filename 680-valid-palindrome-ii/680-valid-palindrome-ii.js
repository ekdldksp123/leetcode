/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
    return isPalindrome(s, 0, s.length - 1, 0)
};

const isPalindrome = (s, start, end, deletions) => {
    if(deletions > 1) return false
    else if(start >= end) return true
    else if(s[start] === s[end]) return isPalindrome(s, start+1, end-1, deletions)
    else return isPalindrome(s, start+1, end, deletions+1) || isPalindrome(s, start, end-1, deletions+1)
}
