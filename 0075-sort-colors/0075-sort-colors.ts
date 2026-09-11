/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let n = nums.length - 1;

    let l = 0;
    let mid = 0;
    let r = n;

    while (mid <= r) {
        if (nums[mid] === 0) {
            [nums[mid], nums[l]] = [nums[l], nums[mid]];
            mid++;
            l++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[r]] = [nums[r], nums[mid]];
            r--;
        }
    }
};