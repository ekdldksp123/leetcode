/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    const arr = []
    
    for(let i = 0; i < numRows; i++) {
        const row = []
        for(let j = 0; j <= i; j++) {
            if(j === 0) row.push(1)
            else if( j === i ) row.push(1)
            else if( i > 0 && j > 0 ) row.push(arr[i-1][j-1] + arr[i-1][j])
            
        }
        arr.push(row)
    }
    return arr;
};

