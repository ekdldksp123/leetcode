function longestPalindrome(s: string): string {
    if (!s.length) return ""

    let longest = ""

    const expand = (left: number, right: number) => {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--
            right++
        }

        // 루프 종료 직전의 유효한 범위
        const palindrome = s.slice(left + 1, right)

        if (palindrome.length > longest.length) {
            longest = palindrome
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i)     // 홀수 길이: "ccc", "aba"
        expand(i, i + 1) // 짝수 길이: "cc", "abba"
    }

    return longest
}