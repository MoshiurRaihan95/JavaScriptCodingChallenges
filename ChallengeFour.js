/*
    Calculates total points of a team from number of wins(3pts), draws(1pt), and losses(0pt).
*/
function footballPoints(wins, draws, losses){
    //Write Your solution Here
    let TotalWing = (wins * 3);
    let TotalDraw = (draws * 1);
    let TotalLosses = (losses * 0);

    let TotalPoints = (TotalWing + TotalDraw + TotalLosses);
    return TotalPoints;
};


console.log(footballPoints(4, 3, 1)); // 15
console.log(footballPoints(10, 5, 0)); // 35
console.log(footballPoints(11, 0, 9)); // 33
console.log(footballPoints(5, 10, 10)); // 25
console.log(footballPoints(20, 20, 20)); // 80