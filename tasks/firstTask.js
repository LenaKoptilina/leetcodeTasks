// 2138. Divide a String Into Groups of Size k

// Companies
// A string s can be partitioned into groups of size k using the following procedure:
// The first group consists of the first k characters of the string,
// the second group consists of the next k characters of the string, and so on.
// Each character can be a part of exactly one group.
// For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.
// Note that the partition is done so that after removing the fill character from the last group (if it exists)
// and concatenating all the groups in order, the resultant string should be s.
//Given the string s, the size of each group k and the character fill, return a string array
// denoting the composition of every group s has been divided into, using the above procedure.

//     Constraints:
// 1 <= s.length <= 100
// s consists of lowercase English letters only.
// 1 <= k <= 100
// fill is a lowercase English letter.


const divideString = function (s, k, fill) {
    const lettersArray = s.split('');
    let elementsArray = [];
    let result = [];
    for (let i = 0; i < lettersArray.length; i += k) {
        elementsArray.push(lettersArray.slice(i, i + k));
    }
    elementsArray.forEach((el) => {
        result.push(el.join(''));
    })
    if (s.length % k !== 0) {
        let lastElement = result[result.length - 1];
        while (lastElement.length < k) {
            lastElement = lastElement.concat(fill);
        }
        result[result.length - 1] = lastElement;
    }
    return result;
}

//console.log(divideString('fhfejft', 3, 'k'));
