/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
    let max = 0;
    let buy = prices[0];
    for(let i=1; i < prices.length; i++) {
        if(buy > prices[i]) buy = prices[i];
        else if(buy < prices[i]) max = Math.max(prices[i] - buy, max);
    }
    return max;
}