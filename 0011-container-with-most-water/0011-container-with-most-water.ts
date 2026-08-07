function maxArea(height: number[]): number {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        const width = right - left
        const lHeight = height[left]
        const rHeight = height[right]
        const isLeftLower = lHeight < rHeight
        const mountOfWater = isLeftLower ? width * lHeight : width * rHeight

        max = Math.max(max, mountOfWater) 

        if(isLeftLower) {
            left ++;
        } else {
            right --;
        }
    }

    return max
};