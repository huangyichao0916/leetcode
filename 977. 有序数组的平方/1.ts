function sortedSquares(A: number[]): number[] {
    return A.map(item => item * item).sort((a,b) => a - b);
};