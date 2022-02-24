/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = (score) => {
    const result = Array(score.length).fill().map((v,i) => `${i}`);
    const sorted = [...score].sort((x,y) => y-x);
    
    for(let i = 0; i < sorted.length; i++) {
        if(i <= 2) {
            result[score.indexOf(sorted[i])] = `${i === 0 ? 'Gold' : (i === 1 ? 'Silver' : 'Bronze')} Medal`;
        } else result[score.indexOf(sorted[i])] = `${i + 1}`;
    }
    return result;
};