/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */

function isPalindrome(str) {
    
    var reversed = str.split("").reverse().join("");

    return str === reversed;
}

















































module.exports = isPalindrome