// Example
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]


const flip = (d, a) => {
    //TODO

    if (d === 'R') {
        return a.sort((a, b) => a - b); // keeping in mind ASCII values instead of leaving it at .sort()

    };

    if (d === 'L') {
        return a.sort((a, b) => b - a);
        
    };

}


console.log(flip('R', [3, 2, 1, 2]))
console.log(flip('L', [1, 4, 5, 3, 5]))