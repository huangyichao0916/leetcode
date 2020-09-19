function coinChange(coins: number[], amount: number): number {
    const arr:Array<number> = [0];
    for (let i = 1; i <= amount; i++) {
        arr[i] = -1;
    }
    // console.log('----',arr[0])
    coins.sort((a,b) => a - b)
    for (let i = 1; i <= amount; i++) {
        // console.log('----',arr[0])
        let minNum:number = Infinity;
        for (let j = 0; j < coins.length; j++) {
            const element:number = coins[j];
            if (element > i) {
                break;
            }
            if (arr[i - element] === -1) {
                continue;
            }
            if (arr[i - element] < minNum) {
                minNum = arr[i - element]
            }
        }
        if (minNum < Infinity) {
            arr[i] = minNum + 1;
        }
    }
    // console.log(arr)
    // console.log('----',arr[0])

    return arr[amount]
};

console.log(coinChange([1, 2, 5],11))