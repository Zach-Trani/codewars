// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
// and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    // Your code here
    if (month >= 1 && month < 4) {
        return 1;
    } else if(month >= 4 && month < 7) {
        return 2;
    } else if(month >= 7 && month < 10) {
        return 3;
    } else if(month >= 10 && month < 13) {
        return 4;
    } else {
        console.log('Please enter a month in numerical form between 1 and 12')
    };
}


console.log(quarterOf(1))
console.log(quarterOf(4))
console.log(quarterOf(7))
console.log(quarterOf(12))
console.log(quarterOf(13))