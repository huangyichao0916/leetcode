function numJewelsInStones(J, S) {
    var reg = new RegExp(`[${J}]`,'g');
    var res = 0;
    while (reg.exec(S)) {
        res++;
    }
    return res;
}
;
console.log(numJewelsInStones("aA", "aAAbbbb"));
