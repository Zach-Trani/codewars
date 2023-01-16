// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
    const sum = 180;
    return (sum - (a + b));
}
console.log(otherAngle(50,40));