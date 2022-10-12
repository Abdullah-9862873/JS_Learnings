

const totalAge = 90;

function timeLeft(currentAge){

    let totalDaysInLife = 90 * 365;
    let totalMonthsInLife = 90 * 12;
    let totalWeeksInLife = 90 * 52;

    let DaysRemaining = totalDaysInLife - (365*currentAge);
    let MonthsRemaining = totalMonthsInLife - (12*currentAge);
    let WeeksRemaining = totalWeeksInLife - (52*currentAge);

    console.log("The number of years you are left with are: ", (90-currentAge));
    console.log("The number of months you are left with are: ", MonthsRemaining);
    console.log("The number of weeks you are left with are: ", WeeksRemaining);
    console.log("The number of days you are left with are: ", DaysRemaining);
}

let currentAge = prompt("Enter your age please");
timeLeft(currentAge);