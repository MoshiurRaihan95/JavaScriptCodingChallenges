/*
    Write Function to return first value of an array.
*/

function getFirstValue(arr) {
    //Write Your solution Here
    return arr[0];
};

/*
    Get first element of an array shift()
*/
function getFirstValue(arr) {
    let FirstValue = arr.shift();//modifies the original array
    return FirstValue;
};


console.log(getFirstValue(["Saab", "Volvo", "BMW"])); // Saab
console.log(getFirstValue([3, 5, 1])); // 3
console.log(getFirstValue(['hello', 'world', 'welcome'])); // hello