/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
    let coins = 1;
    while(n >= coins) {
        if(n - coins >= 0) {
            n -= coins;
            coins++;
        }
    }
    return coins -1;
};