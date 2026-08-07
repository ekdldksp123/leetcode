const phoneMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

function letterCombinations(digits: string): string[] {
    if (digits.length === 1) {
        return [...phoneMap[digits[0]]]
    }

    const output: string[] = []
    function backtrack(combination:string, nextDigits: string) {
        if (nextDigits.length === 0) {
            output.push(combination)
        } else {
            const letters: string = phoneMap[nextDigits[0]]
            for(const letter of letters) {
                //slice() 메서드에 존재하지 않는 인덱스나 범위를 넘는 값을 전달해도 에러가 나지 않고 안전하게 처리
                backtrack(combination + letter, nextDigits.slice(1)) 
            }
        }
    }

    backtrack("", digits)
    return output
};