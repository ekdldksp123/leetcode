/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
    return Array.from({length: n + 1}, (v,i) => i).map(v => countOne(v.toString(2)))
};

const countOne = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') count++;
    }
    return count;
}