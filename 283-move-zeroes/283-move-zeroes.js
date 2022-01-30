/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    for(e of nums) {
        if(e === 0) {
            nums.splice(nums.indexOf(e),1);
            nums.push(0);
        }
    }
    return nums;
};