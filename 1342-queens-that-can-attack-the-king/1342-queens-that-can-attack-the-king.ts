/**
    1. king의 자리에서 left, right, up, down, left-up, left-down, right-up, right-down 
    8가지 방향으로 가장 가까운 queen의 자리를 찾는다.
    2. Set = HashMap으로 전환하고 계산하면 훨씬 빨라진다
 */
const directions = [
    [0, 1],  // right
    [0, -1], // left
    [1, 0],  // down
    [-1, 0], // up
    [1, 1],  // down-right
    [1, -1], // down-left
    [-1, 1], // up-right
    [-1, -1] // up-left
]

const queensAttacktheKing = (queens: number[][], king: number[]): number[][] => {
    const result = []
    const queensLocationSet = new Set(queens.map(([x,y]) =>`${x}${y}`))
    for (const [dx, dy] of directions) {
        let [x, y] = king
        
        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
            x += dx
            y += dy
            if (queensLocationSet.has(`${x}${y}`)) {
                result.push([x, y])
                break;
            }
        }
    }
    return result
}