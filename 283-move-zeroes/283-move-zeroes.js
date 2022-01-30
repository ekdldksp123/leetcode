/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    let count=0;
    while(nums.includes(0)) {
        nums.splice(nums.indexOf(0), 1);
        count++;
    }
    for(let i = 0; i < count; i++) {
        nums.push(0);
    }
    return nums;
};