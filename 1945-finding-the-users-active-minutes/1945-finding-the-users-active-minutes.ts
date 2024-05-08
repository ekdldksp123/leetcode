const findingUsersActiveMinutes = (logs: number[][], k: number): number[] => {
    let result = new Array(k).fill(0);
    const uamMap = new Map();

    for(const log of logs) {
        const user = log[0];
        const time = log[1];
        const set = uamMap.get(user) || [];
        if(!set.includes(time)) uamMap.set(user, [...set, time]);
    }

    for(const user of uamMap.keys()) {
        const index = uamMap.get(user).length - 1;
        result[index] += 1;
    }
    return result;
};