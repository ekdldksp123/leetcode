function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let closest = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    let result = 0;

    for (let i=0; i < nums.length; i++) {
        let r = i + 1; // makes sum greater
        let l = nums.length - 1; // makes sum smaller
        
        while(r < l) {
            const sum = nums[i] + nums[l] + nums[r];
            const gap = Math.abs(target - sum);

            if(gap < closest) {
                result = sum;
                closest = gap;
            }

            if(sum > target) l--;
            else r++;
        }
    }

    return result;
};

