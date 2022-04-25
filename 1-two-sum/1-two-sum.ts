function twoSum(nums: number[], target: number): number[] {
    const hashMap: Record<string, number> = {}
    
    for(const e of nums) {
        const findValue = target - e
        const currentIndex = nums.lastIndexOf(e)
        
        if(findValue in hashMap) return [nums.indexOf(findValue), currentIndex]
        
        hashMap[e] = e
    }
};