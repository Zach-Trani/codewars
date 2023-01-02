// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = (x) => {
    value = 1;

    for (i = 0; i < x.length; i++) {
        value = value * i;
    };

    return value;
};

console.log(grow([1, 2, 3, 4]))