/**
    Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
*/
function lessThan100(a, b){
    let TotalNumber = a + b;
    if(TotalNumber < 100){
        return true;
    }else{
        return false;
    }
}


console.log(lessThan100(10, 20)); // true
console.log(lessThan100(50, 60)); // false
console.log(lessThan100(20, 50)); // true