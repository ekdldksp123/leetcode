function generateParenthesis(n: number): string[] {
    const answer: string[] = []
    function backtrack(current: string, open: number, close: number) {
        console.log({current})
        if(open === n && close === n) {
            answer.push(current)
        }

        if(open < n) {
            backtrack(`${current}(`, open + 1, close)
        }

        if(close < open) {
            backtrack(`${current})`, open, close + 1)
        }
    }

    backtrack("", 0, 0)
    return answer
};