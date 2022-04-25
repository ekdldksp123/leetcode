function twoSum(nums: number[], target: number): number[] {
    const hashMap: Record<string, number> = {};
    
    for(const e of nums) {
        const findValue:number = target - e
        const currentIndex:number = nums.lastIndexOf(e)
        
        if(findValue in hashMap) return [nums.indexOf(findValue), currentIndex]
        
        hashMap[e] = e
    }
};