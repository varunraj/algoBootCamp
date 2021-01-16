// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 1,3,5,7,9,11
// 1,2,3,4,5,6
// n+(n-1)


function pyramid(n) {

    const baseLen = n+(n-1)

    for (let i=1; i <=n; i ++){
        
        let str="";

        for (let k=1; k <=baseLen ; k ++){
            str+="#"
        }

        console.log(str);
    }

}


pyramid(3)

module.exports = pyramid;
