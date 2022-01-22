/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    let cases = new Array(n+1).fill(0);
    
    cases[1] = 1;
    cases[2] = 2;
    for(let i = 3; i <= n; i++) {
        cases[i] = cases[i - 2] + cases[i - 1];
    }
    return cases[n];
};