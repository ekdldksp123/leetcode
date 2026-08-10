function lengthOfLongestSubstring(s: string): number {
    let maxLen = 0;
    let charMap = new Map();

    let left = 0;
    for(let right=0; right < s.length; right++) {
        const char = s[right];
        if(charMap.has(char) && charMap.get(char) >= left) {
            left = charMap.get(char) + 1;
        }
        maxLen = Math.max(maxLen, right - left + 1);

        charMap.set(char, right);
    }

    return maxLen;
};