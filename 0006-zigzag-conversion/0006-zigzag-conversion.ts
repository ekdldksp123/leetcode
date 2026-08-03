function convert(s: string, numRows: number): string {
    if(s.length === 1 || numRows === 1) return s;

    const zigzag = []
    const betweenCount = numRows - 2;
    
    const charIdx = 0;
    let rowIdx = 0;
    while (s.length) {
        zigzag[rowIdx] = [...s.slice(charIdx, charIdx + numRows)]

        rowIdx += 1
        s = s.slice(numRows)
        if (betweenCount > 0 && s.length) {
            for(let i=0; i < betweenCount; i++) {
                zigzag[rowIdx] = Array.from({length: numRows})
                zigzag[rowIdx][numRows - 1 - (i+1)] = s.charAt(i)
                rowIdx += 1
            }
            s = s.slice(betweenCount)
        }
    }

    let result = ''
    for(let i=0; i < numRows; i++) {
        for(const row of zigzag) {
            const char = row[i]
            result += (char || '')
        }
    }

    return result
};