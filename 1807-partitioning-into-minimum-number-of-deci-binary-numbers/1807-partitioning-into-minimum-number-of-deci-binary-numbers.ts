/*
 1. deci-binary = 10, 11, 100, 101, 111, ... 
 2. 각 자리수마다 1씩 뺄수 있으므로 가장 큰 자릿수를 구하면 됨!
 3. 새로운 치환 방법: +"문자열" => 숫자 
 */

const minPartitions = (n: string): number => {
    let result = 0
    for(let i=0; i<n.length; i++) {
        result = Math.max(result, +n[i])
    }
    return result
};