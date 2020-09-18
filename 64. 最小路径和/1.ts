function minPathSum(grid: number[][]): number {
    const rows:number = grid.length;
    const columns:number = grid[0].length;

    for (let i = 1; i < columns; i++) {
        grid[0][i] += grid[0][i - 1];
    }
    for (let i = 1; i < rows; i++) {
        grid[i][0] += grid[i - 1][0]
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < columns; j++) {
            grid[i][j] += Math.min(grid[i - 1][j],grid[i][j - 1]);
        }
    }

    return grid[rows - 1][columns - 1]
};

const testArr:number[][] = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]

console.log(minPathSum(testArr))