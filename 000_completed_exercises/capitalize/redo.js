
function redoCap(sentance){
    const words = sentance.split(' ')
    const capWords = words.map(word=> word[0].toUpperCase()+word.slice(1))
    return capWords.join(' ');
}

console.log(redoCap("my name is varun raj"))

module.exports = redoCap;