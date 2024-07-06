/**
    1. 각 행의 요소는 모두 유니크 해야 한다
        1-1. 가장 많이 중복되는 요소의 값을 기준으로 행이 나뉜다
    2. nums 의 모든 요소가 매트릭스에 들어가야 한다
    3. 매트릭스의 행의 개수는 최소화가 되어야 한다

 */

const findMatrix = (nums: number[]): number[][] => {
    const frequencies = new Map()
    
    let maxFrequency = 0; 
    for(const num of nums) {
        frequencies.set(num, frequencies.get(num) + 1 || 1)
        maxFrequency = Math.max(maxFrequency, frequencies.get(num))
    }
    const matrix: number[][] = Array.from({ length: maxFrequency }, () => []);
    
    frequencies.forEach((value,key) => {
        for(let i=0; i<value; i++) {
            matrix[i].push(key)
        }
    })
    return matrix
};