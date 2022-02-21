/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const map = { 'I': 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000 };
    
    const arr = [...s];
    let sum = 0;
    while(arr.length > 0) {
        if(map[arr[0]] < map[arr[1]]) {
            sum += (map[arr[1]] - map[arr[0]]);
            arr.splice(0, 2);
        } else {
            sum += map[arr[0]];
            arr.splice(0, 1);
        }
    } 
    return sum;
};