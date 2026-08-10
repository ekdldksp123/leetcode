function lengthOfLongestSubstring(s: string): number {
    let arr: boolean[] = Array.from({length: 128}, () => false)
    let l = 0;
    let r = 0;
    let maxLen = 0;

    while(r < s.length) {
        if(!arr[s.charCodeAt(r)]) {
            arr[s.charCodeAt(r)] = true;
            maxLen = Math.max(maxLen, r - l + 1)
            r++;
        } else {
            arr[s.charCodeAt(l)] = false;
            l++;
        }
    }
    return maxLen
};