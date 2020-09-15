function uniquePaths(m: number, n: number): number {
    [m,n] = [n,m] //m,n分别对应行、列
    const arr:number[][] = [];
    for (let i = 0; i < m - 1; i++) {
        const myArr:number[] = new Array(n);
        for (let j = 0; j < n - 1; j++) {
            myArr[j] = 0;
        }
        myArr[n - 1] = 1
        arr.push(myArr)
    }
    const myArr:number[] = new Array(n)
    for (let j = 0; j < n; j++) {
        myArr[j] = 1;
    }
    arr.push(myArr)
    // console.log(arr)

    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            arr[i][j] = arr[i + 1][j] + arr[i][j + 1]
        }
    }
    return arr[0][0];
};

console.log(uniquePaths(3,2))