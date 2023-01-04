/*
    Converts hours into seconds.
*/
function howManySeconds(hours) {
    //Write Your solution Here
    let SecondsResult = (hours * 3600);
    return SecondsResult;
};


console.log(howManySeconds(12)); // 43200
console.log(howManySeconds(8)); // 28800
console.log(howManySeconds(3)); // 10800