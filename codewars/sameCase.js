// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b){
    // not a letter - this should change the case IF it were a letter.
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
    // check if changing it to a case still allows input to equal itself. AKA: checking to see what case it is.
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
     }else{
       return 0
     }
   }

console.log(sameCase('a', 'g'))
console.log(sameCase('C', 'C'))
console.log(sameCase('b', 'C'))
console.log(sameCase('0', '?'))

