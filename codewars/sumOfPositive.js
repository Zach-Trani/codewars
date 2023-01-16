// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

const SumOfPositive = (arr) => {

    let val = 0;


    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            val += arr[i];
            // console.log(i);
        };
    };

    return val;
};

console.log(SumOfPositive([0, 1, 2, 3, 10, -5]))
