/**
    1. i번째 칸에서 채워지는 빗물을 구하기
    2. 양 옆의 최대 높이값을 구한다 -> 이중 최소값이 실제 블록 높이
    3. 구한 높이에서 그 사이의 낮은 블록 높이를 뺀 값을 더한다
    4. 이제 속도 최적화 해야됨. 너무 느림. -> 양옆 최대 높이값을 위한 배열을 만들자!
 */

const trap = (height: number[]): number => {
    const leftMax = [height[0]]
    const rightMax = [height[height.length-1]]

    const length = height.length
    for(let i=0; i<length; i++) {
        const lastOfLeftMax = leftMax[leftMax.length-1]
        leftMax.push(height[i] >= leftMax[i] ? height[i] : lastOfLeftMax)
        const lastOfRightMax = rightMax[rightMax.length-1]
        rightMax.push(height[length - i - 1] >= lastOfRightMax ? height[length - i - 1] : lastOfRightMax)
    }

    return leftMax.reduce((acc, cur, idx) => {
        const blockHeight = Math.min(cur, rightMax[rightMax.length - idx - 1])
        if(height[idx] < blockHeight) {
            acc+= blockHeight - height[idx]
        }
        return acc
    },0)
};