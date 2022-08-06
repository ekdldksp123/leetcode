/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(columnNumber) {
    let column = ''
    while(columnNumber >= 1){
        column = String.fromCharCode(((columnNumber - 1) % 26) + 65) + column
        columnNumber = (columnNumber - 1)/ 26
    }
    return column
};