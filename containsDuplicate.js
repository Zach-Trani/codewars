// Write a function that returns true if the input array has a duplicte number and false if it does not have a duplicate.
// input: nums = [1,2,3,1]
// output: true
// input: nums = [1,2,3,4]
// output: false

// use a hash map
function containsDupes(arr){
    let numsMap = {}
    for(let i = 0; i < arr.length; i++){
        let num = arr[i] // arr[1]
        if(numsMap[num]){
            return true
        }else{
            numsMap[num] = true
        }
        console.log(numsMap)
    }
    return false
}

console.log(containsDupes([1, 2, 3, 1]))
console.log(containsDupes([1, 2, 3, 4]))
