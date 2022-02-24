/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = (score) => {
    const result = Array(score.length).fill().map((v,i) => `${i}`);
    const sorted = [...score].sort((x,y) => y-x);
    
    for(let i = 0; i < sorted.length; i++) {
        if(i===0) result[score.indexOf(sorted[i])] = "Gold Medal";
        else if(i===1) result[score.indexOf(sorted[i])] = "Silver Medal";
        else if(i===2) result[score.indexOf(sorted[i])] = "Bronze Medal";
        else {
            result[score.indexOf(sorted[i])] = `${i + 1}`;
        }
    }
    
    return result;
};