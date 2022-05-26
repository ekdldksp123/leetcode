/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = (nums) => {
    const result = []
    for(const el of nums){
        result.push(nums[el])
    }
    return result
};