/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if(strs.length === 1) return strs[0]
    
    let maxStrLen = strs[0].length
    for(let i =0; i < strs.length; i++){
        let currLength = strs[i].length
        maxStrLen = Math.min(currLength, maxStrLen)
    }
    let prefix = ''
    let current
    for(let i=0; i < maxStrLen; i++){     
        current = strs[0][i]
        for(let j=1; j < strs.length; j++){
            if(current != strs[j][i]){
                return prefix
            }
        }
        prefix += current    
    } 
    return prefix

};

/*
* 1. 처음에 배열의 길이가 2 이상인지 확인하고 첫번째 요소와 두번째 요소의 첫글자가 일치하는지 확인한다.
    1-1. 이때 일치하면 for 문을 돌려서 공통 prefix를 추출한다.
* 2. 공통 문자열이 없으면(else) 바로 "" 을 리턴하고 배열의 길이가 1인 경우 strs[0] 을 리턴한다.
* 3. 공통 문자열이 있으면 결과값 변수를 초기화 해주고 for 문을 돌리면서 전체요소에 prefix가 포함되어 있는지 회긴. 
    3-1. 이때 공통 prefix 와 첫글자는 일치하지만 전체가 일치하지 않으면 for문을 돌려서 공통 prefix를 다시 추출한다.
* 4. 배열 끝까지 공통 prefix 가 있으면 그걸 리턴, 없으면 중간에 "" 리턴!
*/