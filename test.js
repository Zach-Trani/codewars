function isCat(bool) {
    if (bool === true) {
        //do stuff
        console.log('cat')
    } else {
        //do stuff
        console.log('dog')
    }
};

function ternaryIsCat(bool) {
    bool === true ? console.log('cat') : console.log('dog')
}