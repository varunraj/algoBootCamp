function matrixRedo(num){
    let counter = 0;
    let finalArray = []
    for (let x=1; x<= num; x++){
        const row = []
        for (let y=1; y<= num; y++){
            counter ++ 
            row.push(counter)
        }
          
        finalArray.push(row)
    }

    return finalArray;
}


const m = matrixRedo(3);
console.log(m.length) //3
console.log(m[0]) // ([1, 2, 3]);
console.log(m[1]) // ([1, 2, 3]);


module.exports = matrixRedo;