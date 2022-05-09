function isAnagram(s: string, t: string): boolean {
    return JSON.stringify([...s].sort((x,y) => x.localeCompare(y))) === JSON.stringify([...t].sort((x,y) => x.localeCompare(y)))
};