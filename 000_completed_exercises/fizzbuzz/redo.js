
function fizzBuzzRedo (num){

    for (let i=1; i<= num; i++ ){
        
        if(i%3 === 0 && i%5 ===0 ){
            console.log('fizzbuzz')
        } else if (i%3 === 0){
            console.log('fizz')
        } else if (i%5 === 0){
            console.log('buzz')
        } else {
            console.log(i)
        }
    }

}

fizzBuzzRedo(15)

module.exports = fizzBuzzRedo;