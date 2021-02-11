
function reverseIntRedo(num){
    const sign = Math.sign(num)
    const unsignedNum = num*sign
    const reversed = parseInt(unsignedNum.toString().split('').reverse().join(''))
    return reversed * sign;
}

reverseIntRedo(123456)

module.exports = reverseIntRedo;