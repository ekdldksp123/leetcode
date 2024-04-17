function plusOne(digits: number[]): number[] {
    const num = BigInt(digits.join(''))
    const numPlusOne = num + BigInt(1);
    const result = [...`${numPlusOne}`].map(v => Number(v));
    return result;
};