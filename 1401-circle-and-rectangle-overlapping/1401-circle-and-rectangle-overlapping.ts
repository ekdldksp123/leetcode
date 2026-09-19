function checkOverlap(radius: number, xCenter: number, yCenter: number, x1: number, y1: number, x2: number, y2: number): boolean {
    const closestX = Math.max(x1, Math.min(xCenter, x2))
    const closestY = Math.max(y1, Math.min(yCenter, y2))

    const dx = xCenter - closestX
    const dy = yCenter - closestY

    return dx * dx + dy * dy <= radius * radius
};