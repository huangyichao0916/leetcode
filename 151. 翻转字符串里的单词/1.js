var reverseWords = function(s) {
    s = s.trim();
    let arr = s.split(' ');
    // console.log(arr);
    arr = arr.filter(item => item !== '');
    arr.reverse();
    return arr.join(' ');
};

let testStr = "example   good a";
console.log(reverseWords(testStr));