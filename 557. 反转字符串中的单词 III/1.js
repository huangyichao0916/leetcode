/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ');
    return s.map(item => {
        return item.split('').reverse().join('');
    }).join(' ');
};
console.log(reverseWords("s'teL ekat edoCteeL tsetnoc" ))