/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if(strs.length === 1) return strs[0]
    
    let maxStrLen = strs[0].length
    for(let i = 0; i < strs.length; i++){
        let currLength = strs[i].length
        maxStrLen = Math.min(currLength, maxStrLen)
    }
    let prefix = ''
    for(let i=0; i < maxStrLen; i++){     
        for(let j=1; j < strs.length; j++){
            if(strs[0][i] != strs[j][i]){
                return prefix
            }
        }
        prefix += strs[0][i] 
    } 
    return prefix
};

/*
* 1. 처음에 배열의 길이가 1이면 첫번째 요소를 리턴한다.
* 2. 배열의 첫번째 문자열의 길이를 maxStrLen 로 초기화해주고 for 문을 돌리면서 문자열 길이의 최소값으로 maxStrLen에 할당해준다.
* 3. prefix 변수를 for문 밖에 선언해주고 maxStrLen 만큼 for 문을 돌리면서 str[0][i] 값을 current 변수에 초기화해준다.
* 4. current 값이 strs의 두번째 요소부터 포함되는지 검사하고 포함되지 않으면 prefix를 리턴, 포함되면 prefix 값에 append 해준다.
*/