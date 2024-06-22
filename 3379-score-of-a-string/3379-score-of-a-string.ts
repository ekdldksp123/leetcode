const scoreOfString = (s: string): number => {
    let score = 0;
    for(let i=1; i<s.length; i++) {
       score += Math.abs(s[i-1].charCodeAt(0) - s[i].charCodeAt(0))
    }
    return score
};