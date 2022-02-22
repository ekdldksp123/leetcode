/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = (columnTitle) => {
    const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    return columnTitle.split('').reduceRight((acc, cur, idx) => {
        acc += (arr.indexOf(cur) + 1) * Math.pow(26, columnTitle.length - idx -1);
        return acc;
    }, 0);
};