function search(nums: number[], target: number): number {
    for(let i=0; i<nums.length; i+= 1) {
        if(nums[i] === target) {
            return i
        }
    }
    return -1
};