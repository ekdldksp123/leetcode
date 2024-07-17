const validStrings = (n: number): string[] => {
    const result: string[] = []
    
    const backtrack = (current: string, lastChar: string) => {
        if (current.length === n) {
            result.push(current)
            return
        }
        
        if (lastChar !== '0') {
            backtrack(`${current}0`, '0')
        }
        backtrack(`${current}1`, '1')
    }
    backtrack('', '')
    
    return result
};