
function charMap(str){

    const charArray = str.split('');
    const map = {}

    for (let char of charArray){
        if(char in map){
            map[char] += 1
        } else {
            map[char] = 1
        }
    }
    return map;
}



function maxCharRedo(str){
    const map = charMap(str)
    let maxChar = ''
    let maxCharCount = 0

    for (charIndex in map) {
        if(map[charIndex] > maxCharCount){
            maxChar = charIndex;
            maxCharCount = map[charIndex]  
        }   
        
    }

    return maxChar;

}

maxCharRedo("varunraj")

module.exports = maxCharRedo;