/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
    if(`${num}`.length === 1) return num
    
    while(`${num}`.length > 1) {
        const strNum = [...`${num}`]
        num = strNum.reduce((acc, cur) => acc + parseInt(cur), 0)
    }
    return num
};