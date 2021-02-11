function vowelRedo (str){
    const vowels = 'aeiou'.split('')
    let counter = 0;
    for(let char of str){
        if(vowels.find((vowel)=> vowel === char)){
            counter ++
        }
    }
    return counter;
}


console.log(vowelRedo('aarrruueo'))

module.exports - vowelRedo;