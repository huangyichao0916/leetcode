function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const rows:number = obstacleGrid.length;
    const columns:number = obstacleGrid[0].length;
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    if (rows === 1 && columns === 1) {
        return 1;
    }
    let i:number = 1;
    for (; i < columns; i++) {
        if (obstacleGrid[0][i] === 0) {
            obstacleGrid[0][i] = 1;
        }else{
            break;
        }
    }
    for (; i < columns; i++) {
        obstacleGrid[0][i] = 0;
    }
    let j:number = 1;
    for (; j < rows; j++) {
        if (obstacleGrid[j][0] === 0) {
            obstacleGrid[j][0] = 1;
        }else{
            break;
        }
    }
    for (; j < rows; j++) {
        obstacleGrid[j][0] = 0
    }

    for (let p = 1; p < rows; p++) {
        for (let q = 1; q < columns; q++) {
            if (obstacleGrid[p][q] === 1) {
                obstacleGrid[p][q] = 0;
            }else{
                obstacleGrid[p][q] = obstacleGrid[p - 1][q] + obstacleGrid[p][q - 1];
            }
        }
    }

    // obstacleGrid.forEach(i => console.log(i))

    return obstacleGrid[rows - 1][columns - 1];
};
// const testArr:number[][] = [
//     [0,0,0],
//     [0,1,0],
//     [0,0,0]
//   ];
// console.log(uniquePathsWithObstacles(testArr))