

function bmiCalculator(weight, height){
    return (weight / (height ** 2));
}

var bmi = bmiCalculator(65, 1.8);
console.log(Math.floor(bmi));