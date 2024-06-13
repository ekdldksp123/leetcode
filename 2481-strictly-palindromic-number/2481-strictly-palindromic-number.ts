const isStrictlyPalindromic = (n: number): boolean => {
    let base: number = 2
    let isPalindromic: boolean = true;

    while(base + 2 <= n) {
        const numToBaseString = n.toString(base)
        const len = numToBaseString.length

        for (let i = 0; i < len / 2; i++) {
            if (numToBaseString[i] !== numToBaseString[len - 1 - i]) {
                isPalindromic = false
            }
            if(!isPalindromic) break;
        }
        if(!isPalindromic) break;
        base += 1
    }

    return isPalindromic
};