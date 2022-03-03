/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = (time) => {
    let count=0, map = new Map();
    
    for(const e of time) {
        const mod = e % 60;
        const left = mod === 0 ? 0 : 60 - mod;
        count += map.get(left) || 0;
        map.set(mod, (map.get(mod) || 0) + 1);
    }
    return count;
};

/*
*
* 1. i < j(= i가 먼저) 이고 time[i] + time[j] % 60 === 0 인 순열(이라는 단어에 꽃혀서 삽질 금지)
* 2. 즉 time[i] % 60 = mod, 나머지 값. -> time[j] = 60 - mod.
* 3. mod 가 0 일 경우 자동으로 left 도 0 이 된다 => count ++;
* 4. count 에는 0 일 경우에만 더하면 된다 => map.get(0)
* 5. return count
* 
*/