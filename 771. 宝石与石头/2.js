function numJewelsInStones(J, S) {
    var reg = new RegExp("[" + J + "]");
    return S.split(reg).length - 1;
}
;
