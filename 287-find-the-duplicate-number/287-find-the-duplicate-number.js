/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
    const map = new Map()
    
    for(let i=0; i<nums.length; i++) { // index 를 이용한 for 문이 제일 빠름
        if(!map.has(nums[i])) map.set(nums[i], 0)
        else return nums[i]
    }
};
