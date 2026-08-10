function winnerSquareGame(n: number): boolean {
    const dp: boolean[] = Array.from({length: n + 1}, () => false)
    
    for(let i=1; i<=n; i++) {
        for(let j=1; j*j<=i; j++) {
            // 상대방에게 패배 상태를 넘길 수 있다면 현재 플레이어 승리
            if(!dp[i - (j*j)]) {
                dp[i] = true
            }
        }
    }
    return dp[n]
};