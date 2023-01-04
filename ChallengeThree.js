/*
    Converts minutes into seconds.
*/
function ConvertSeconds(minutes){
    //Write Your solution Here
    let SecondsResult = (minutes * 60);
    return SecondsResult;
};


console.log(ConvertSeconds(30)); // 1800
console.log(ConvertSeconds(10)); // 600
console.log(ConvertSeconds(20)); // 1200