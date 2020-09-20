function waysToChange(n: number): number {
    const remainder:number = 1000000007;
    const coins:number[] = [1,5,10,25];
    const arr:number[] = [1]
    for (let i = 1; i <= n; i++) {
        arr[i] = 0;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < coins.length; j++) {
            const element = coins[j];
            if (element > i) {
                break;
            }
            arr[i] += arr[i - element];
            arr[i] = arr[i] % remainder;
        }
    }

    return arr[n]
};

console.log(waysToChange(10))