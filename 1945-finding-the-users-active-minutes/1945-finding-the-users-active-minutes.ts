const findingUsersActiveMinutes = (logs: number[][], k: number): number[] => {
    let result = new Array(k).fill(0);
    const uamMap = new Map();

    for(const log of logs) {
        const user = log[0];
        const time = log[1];
        const set = uamMap.get(user) || new Set();
        set.add(time)
        uamMap.set(user, set);
    }

    for(const user of uamMap.keys()) {
        const set = uamMap.get(user);
        const index = set.size - 1;
        result[index] += 1;
    }
    return result;
};