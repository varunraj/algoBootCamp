const palindrome = require(".");

function palindromeRedo(str){

    //console.log(str.split('').reverse().join(''))

    return str.split('').reverse().join('') === str

}


module.exports = palindromeRedo;