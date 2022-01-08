
// find the longest word in an array

function findLongestWord() {

    const array = str.split("")
    var max = 0;
   
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > max) {
            max = array[i].length
        }
    }
     return max
}

