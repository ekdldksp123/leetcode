type Target = {
    open: number
    close: number
}

function removeInvalidParentheses(s: string): string[] {
    const answer = new Set<string>()
    const {open, close} = targetChars(s)

    const recur = (str:string, open:number, close:number, index:number) => {
        if(!open && !close) {
            const target: Target = targetChars(str) 
            if(!target.open && !target.close) {
                answer.add(str)
            }
            return
        }

        if(index >= str.length) return

        if(open && str[index] === '(') {
            recur(str.slice(0, index) + str.slice(index + 1), open-1, close, index)
        } 
        if(close && str[index] === ')') {
            recur(str.slice(0, index) + str.slice(index + 1), open, close-1, index)
        }

        recur(str, open, close, index+1)
    }

    recur(s, open, close, 0)

    return [...answer]
};

function targetChars(s: string): Target {
    let open:number = 0;
    let close:number = 0;

    for(const char of s) {
        if(char === '(') {
            open +=1
        } else if(char === ')') {
            open ? open -=1 : close +=1
        }
    }

    return {open, close}
}