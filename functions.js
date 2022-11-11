
//Function 1 
//runtime complexity o(n^2)
//spacecomplexity o(n)
function addToZero (array){
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        for (let k = i+1 ; k < array.length; k++) {
           newarray.push(array[i]+array[k])
        }
    }
    return newarray.includes(0)
}
// console.log(addToZero([]));
// // -> False

// console.log(addToZero([1]));
// // -> False

// console.log(addToZero([1, 2, 3]));
// // -> False

// console.log(addToZero([1, 2, 3, -2]));
// // -> True

//Function 2 
//runtimecomplexity o(n^2)
//spacecomplexity o(1)
function hasUniqueChars (string){
    for (let i = 0; i < string.length; i++) {
        for (let k = i+1; k < string.length; k++) {
            if(string[i] === string[k]){
                return false
            }
        }
    }
    return true
}
// console.log(hasUniqueChars("Monday"));
// // -> True
// console.log(hasUniqueChars("Moonday"));
// // -> False
// console.log(hasUniqueChars("Amy Garry"))
// console.log(hasUniqueChars("Am Gry"))

//Function 3
//runtime o(n)
//spacetime complexity o(1)
function isPangram (string){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let str = string.toLowerCase()
    let finalstr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    for (let i = 0; i < alphabet.length; i++) {
        if(finalstr.includes(alphabet[i]) === false){
            return false
        }
    }
    return true
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// // -> True

// console.log(isPangram("I like cats, but not mice"));
// // -> False

// console.log(isPangram("qwertyuioplkjhgfdsazxcvbnm"))

//Function 4
//runtime o(n)
//space complexity o(1)
function findLongestWord(array) {
    var longestWord = 0;
    for(var i = 0; i < array.length; i++){
      if(array[i].length > longestWord){
      longestWord = array[i].length; 
        }
    }
    return longestWord
}

console.log(findLongestWord(["hi", "hello"]));