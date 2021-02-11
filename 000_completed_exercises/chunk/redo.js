function chunks(arr, len){
    
    const sliced = [];
    
    while (arr.length > len) {
        //console.log(arr.splice(0,len));
        //console.log(arr)
        sliced.push(arr.splice(0,len))
    }

    sliced.push(arr)
    return sliced;
}

module.exports = chunks;

console.log(chunks([1,2,3,4,5,6,7],2));