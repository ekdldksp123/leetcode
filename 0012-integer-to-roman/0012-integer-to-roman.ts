const map = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
}
function intToRoman(num: number): string {
    let answer = ""
    
    let divisor = 1000;
    while(num > 0) {
        let count = Math.floor(num/divisor)
        const isOverFive = count >= 5
        if(count % 5 === 4) {
            answer += isOverFive ? `${map[divisor]}${map[divisor*10]}` : `${map[divisor]}${map[divisor*5]}`
        } else if(isOverFive){
            answer+= map[divisor*5]
            for(let i=0; i<count - 5; i++) {
                answer += map[divisor]
            }
        } else {
            for(let i=0; i<count; i++) {
                answer += map[divisor]
            }
        }
        num -= count * divisor
        divisor /= 10
    }
    

    return answer
};