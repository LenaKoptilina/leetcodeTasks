
// var rearrangeArray = function (nums) {

//     let indexPositive = 0;
//     let indexNegative = 0;
//     let i = 0
//     let res = []
//     while (indexPositive < nums.length) {
//         if (nums[indexPositive] > 0) {
//             break;
//         }
//         indexPositive++;
//     }
//     while (indexNegative < nums.length) {
//         if (nums[indexNegative] < 0) {
//             break;
//         }
//         indexNegative++;
//     }
//
//     while(i < nums.length) {
//         res.push(nums[indexPositive])
//         res.push(nums[indexNegative])
//         indexPositive++;
//         indexNegative++;
//         while (indexPositive < nums.length) {
//             if(nums[indexPositive] > 0) {
//                 break
//             }
//             indexPositive++;
//         }
//         while (indexNegative < nums.length) {
//             if (nums[indexNegative] < 0) {
//                 break;
//             }
//             indexNegative++;
//         }
//         //indexPositive +=2
//         i = i+2
//     }
//     console.log(indexPositive)
//     console.log(indexNegative)
//         console.log(res)
// };
//
// rearrangeArray([3, 1, -2, -5, 2, -4])
// Output: [3, -2, 1, -5, 2, -4]

let rearrangeArray = function (nums) {
    let positiveArr = [];
    let negativeArr = [];
    let resultArr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positiveArr.push(nums[i])
        } else {
            negativeArr.push(nums[i])
        }
    }
    console.log(positiveArr);
    console.log(negativeArr)
    for (let i = 0; i < positiveArr.length; i++) {
        resultArr.push(positiveArr[i])
        resultArr.push(negativeArr[i])
    }
    console.log(resultArr)
}
    rearrangeArray([3, 1, -2, -5, 2, -4]);


