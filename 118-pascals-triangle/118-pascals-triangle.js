/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    const arr = [];
    for(let i = 0; i < numRows; i++) {
        const row = [1];
        
        for(let j = 1; j < i; j++) {
            row.push(arr[i-1][j-1] + arr[i-1][j]);
        }
        
        if( i > 0 ) row.push(1);
        arr.push(row);
    }
    
    return arr;
};

