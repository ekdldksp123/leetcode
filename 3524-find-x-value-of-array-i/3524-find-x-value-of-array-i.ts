function resultArray(nums: number[], k: number): number[] {
    const dp = Array.from({ length: nums.length },() => new Array<number>(k).fill(0))

    const result = new Array<number>(k).fill(0)

    for(let i=0; i<nums.length; i++) {
        const value = nums[i] % k
        dp[i][value]++

        if(i > 0) {
            for(let r=0; r<k; r++) {
                const newR = (r * value) % k
                dp[i][newR] += dp[i-1][r]
            }
        }

        for (let r=0; r<k; r++) {
            result[r] += dp[i][r]
        }
    }
    return result
};