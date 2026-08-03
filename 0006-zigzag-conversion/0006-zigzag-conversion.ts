function convert(s: string, numRows: number): string {
    if(numRows === 1) return s

    const rows = new Array(numRows).fill('')
    
    let rowIdx = -1
    let ascending = true

    for (let i=0; i<s.length; i++) {
        rowIdx += ascending ? 1 : -1
        rows[rowIdx] += s[i]

        if (rowIdx === numRows - 1) {
            ascending = false
        } else if (rowIdx === 0) {
            ascending = true
        }
 
    }

    return rows.join('')
};