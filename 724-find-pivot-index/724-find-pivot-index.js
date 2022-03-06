/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
    const sum = nums.reduce((acc, cur) => acc+cur,0);
    let left = 0;
    
    for(let i=0; i < nums.length; i++) {
        left += i > 0 ? nums[i-1] : 0;
        if(left === (sum - left - nums[i])) return i;
    }
    return -1;
};


/*
*
*
*
*
*
*/