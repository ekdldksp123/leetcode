function lengthOfLongestSubstring(s: string): number {
    if(!s.length) return 0;

    let charArr = [s[0]]
    let maxLength = 1;

    for(let i=1; i<s.length; i++) {
        if(!charArr.includes(s[i]) && charArr.includes(s[i-1])) {
            charArr.push(s[i])
        } else if(charArr.includes(s[i]) && s[i] !== s[i-1]) {
            charArr = charArr.slice(charArr.indexOf(s[i]) + 1)
            charArr.push(s[i])
        } else {
            charArr = [s[i]]
        }
        maxLength = Math.max(charArr.length, maxLength)
    }
    return Math.max(charArr.length, maxLength)
};