// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    
    const arr = n.toString().split('');
    
    if (arr[0] === "-" ){
        arr.shift()
        return parseInt(arr.reverse().join(''),10) * -1 
    } else 
        return parseInt(arr.reverse().join(''),10) 
    
}

module.exports = reverseInt;
