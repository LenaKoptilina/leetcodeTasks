var capitalizeTitle = function(title) {
    const array = title.toLowerCase().split(' ');
    array.forEach((el, index) => {
        if (el.length > 2) {
            array[index] = el[0].toUpperCase().concat(el.slice(1));
        }
    })
    console.log(array.join(' '))
};

capitalizeTitle("i lOve leetcode")