/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
    let max = 0;
    for(e of accounts) {
        max = Math.max(e.reduce((acc, cur) => {
            return acc+cur;
        }), max);
    }
    return max;
};