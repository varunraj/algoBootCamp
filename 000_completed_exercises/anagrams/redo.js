
function cleanStr(str){
    return str.split('').sort().join('');
}



function anaRedo(str1, str2) {
    return cleanStr(str1) === cleanStr(str2) 

}

module.exports = anaRedo;