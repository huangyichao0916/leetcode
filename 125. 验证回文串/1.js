/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/ig,'')
    let p = s;
    s = s.split('').reverse().join('');
    return s.toUpperCase() === p.toUpperCase();
};

console.log(isPalindrome("race a car"));