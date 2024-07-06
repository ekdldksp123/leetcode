/**
    1. 같은 그룹 크기에 속한 사람들의 ID(=인덱스)를 map에 추가한다
    2. 맵을 돌면서 같은 키의 값끼리 배열로 만들어서 결과에 추가해준다
        2-1. 이때 맵이 키(그룹 사이즈)와 밸류(실제 그룹)의 사이즈가 같은지 확인하고 다르다면 그룹을 분할해준다
        2-2. 분할해줄때는 slice 함수를 이용해서 해준다 
 */

const chunkArray = (array: number[], size: number): number[][] => {
    const result: number[][] = [];
    
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}

const groupThePeople = (groupSizes: number[]): number[][] => {
    const result = [];

    const groupMap = new Map<number, Array<number>>()
    for(let i=0; i<groupSizes.length; i++) {
        const size = groupSizes[i]
        if(groupMap.has(size)) {
            groupMap.set(size, [...groupMap.get(size), i])
        } else {
            groupMap.set(size, [i])
        }
    }

    groupMap.forEach((value, key) => {
        if(key === value.length) result.push(value)
        else result.push(...chunkArray(value, key))
    })

    return result
};