// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    
    const map = {}
    
    for (let char of str) {
        if (char in map){
            map[char] ++ 
        } else {
            map[char] = 1
        }
    }


    let [maxChar,maxLen] = ['',0]

    for (let key in map){


        if (map[key] > maxLen) {
            maxLen = map[key]
            maxChar = key   
        }
    }

    return maxChar;
}


module.exports = maxChar;
