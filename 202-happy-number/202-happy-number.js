/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    let set = new Set();
    let sum = 0;
    
    while(true) {
        const arr = [...String(n)];
        sum = arr.reduce((acc, cur) => {return acc + Math.pow(parseInt(cur), 2)}, 0);
        if(sum === 1) return true;
        if(set.has(sum)) return false;
        set.add(sum);
        n = sum;
    }
    
};

