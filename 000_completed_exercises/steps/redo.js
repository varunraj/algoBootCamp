function stepsRedo(num){
    
    let printHash = ''
    for(let i=1; i <= num; i++){
        printHash += '#'
        console.log(printHash)
    }
}

stepsRedo(3);

module.exports = stepsRedo;