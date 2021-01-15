// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    const rev = []

    for (var i = str.length - 1 ; i >= 0; i--) {
        rev.push(str[i]);
    }

    return rev.join('')


}



function reverse1(str) {

    const arr = str.split(''); // turn into array
    arr.reverse(); // reverse array
    return arr.join(); // join array to make string and return 


}

module.exports = reverse;
