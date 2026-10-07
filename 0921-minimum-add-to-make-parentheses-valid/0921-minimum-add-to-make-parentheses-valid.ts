function minAddToMakeValid(s: string): number {
    let open:number = 0
    let needed:number = 0

    for(const char of s) {
        if(char === '(') {
            open += 1
        } else if(char === ')') {
            open ? open -= 1 : needed += 1
        }
    }

    return open + needed
};