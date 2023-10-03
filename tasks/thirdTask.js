//2149. Rearrange Array Elements by Sign
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should rearrange the elements of nums such that the modified array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

const rearrangeArray = function (nums) {
    let positiveArr = [];
    let negativeArr = [];
    let resultArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positiveArr.push(nums[i]);
        } else {
            negativeArr.push(nums[i]);
        }
    }
    for (let i = 0; i < positiveArr.length; i++) {
        resultArr.push(positiveArr[i]);
        resultArr.push(negativeArr[i]);
    }
    return resultArr;
}

//console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
