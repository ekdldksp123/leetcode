const numberOfBeams = (bank: string[]): number => {
    let previousCount = 0;
    let totalBeams = 0;

    for (const row of bank) {
        const currentCount = row.split('').filter(ch => ch === '1').length;

        if (currentCount > 0) {
            totalBeams += previousCount * currentCount;
            previousCount = currentCount;
        }
    }
    return totalBeams;
};