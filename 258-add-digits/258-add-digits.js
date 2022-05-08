/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
    if(num < 10) return num
    
    while(num >= 10) {
        const strNum = [...`${num}`]
        num = strNum.reduce((acc, cur) => acc + parseInt(cur), 0)
    }
    
    return num
};