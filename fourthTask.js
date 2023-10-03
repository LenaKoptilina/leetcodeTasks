//2150. Find All Lonely Numbers in the Array
// You are given an integer array nums. A number x is lonely when it appears only once,
// and no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.
// Return all lonely numbers in nums. You may return the answer in any order.

const findLonely = function (nums) {
    if (nums.length === 1) {
        return nums;
    }
    let resArray = [];
    nums.sort((a, b) => a - b);

    function checkRightNeighbour(index) {
        return index === nums.length - 1 ? true : nums[index] + 1 < nums[index + 1];
    }

    function checkLeftNeighbour(index) {
        return index === 0 ? true : nums[index] - 1 > nums[index - 1];
    }

    for (let i = 0; i < nums.length; i++) {
        if (checkRightNeighbour(i) && checkLeftNeighbour(i)) {
            resArray.push(nums[i]);
        }
    }

    return resArray;
};

console.log(findLonely([1, 1, 1, 5, 2, 7, 3]));
