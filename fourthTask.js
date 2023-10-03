var findLonely = function (nums) {
    if (nums.length === 1) {
        return nums
    }
    let resArray = []
    nums.sort((a, b) => a - b);
    console.log(nums)

    function checkRightNeighbour(index) {
        return index === nums.length - 1 ? true: nums[index] + 1 < nums[index + 1]
    }

    function checkLeftNeighbour(index) {
        return index === 0 ? true: nums[index] - 1 > nums[index - 1]
    }

    for (let i = 0; i < nums.length; i++) {
        if (checkRightNeighbour(i) && checkLeftNeighbour(i)) {
            resArray.push(nums[i])
        }
    }

    console.log(resArray)
};

findLonely([1, 1, 1, 5, 2, 7, 3])


// for (let i = 0; i < nums.length; i++) {
//     if (i === 0 && checkRightNeighbour(i)) {
//         resArray.push(nums[i])
//     } else if (i === nums.length - 1 && checkLeftNeighbour(i)) {
//         resArray.push(nums[i])
//     } else if (checkRightNeighbour(i) && checkLeftNeighbour(i)) {
//         resArray.push(nums[i])
//     }
// }


