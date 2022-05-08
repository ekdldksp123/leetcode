/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
    if(String(num).length === 1) return num
    
    while(String(num).length > 1) {
        const strNum = [...`${num}`]
        num = strNum.reduce((acc, cur) => acc + parseInt(cur), 0)
    }
    
    return num
};