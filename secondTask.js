//2129. Capitalize the Title
//You are given a string title consisting of one or more words separated by a single space,
//where each word consists of English letters.
//Capitalize the string by changing the capitalization of each word such that:
//If the length of the word is 1 or 2 letters, change all letters to lowercase.
//Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

const capitalizeTitle = function (title) {
    const array = title.toLowerCase().split(' ');
    array.forEach((el, index) => {
        if (el.length > 2) {
            array[index] = el[0].toUpperCase().concat(el.slice(1));
        }
    })
    return array.join(' ');
};

console.log(capitalizeTitle("I LOVE LEETCODE"));
