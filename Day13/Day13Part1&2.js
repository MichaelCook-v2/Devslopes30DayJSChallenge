// The Mission part:1 The calculator

var rs= require('readline-sync');

let input;
let num1;
let num2;
let result;
let operation = false;

while(!operation){
    input = rs.question('what operation would you like to preform? (+,-,*,/)');
    if(input === '+'|| input === '-' || input === '*' || input === '/')
{ operation = true;
    break;
} else {
    console.log('That is not a valid choice');
}
}

num1 = rs.questionInt('Please enter your first number');
num2 = rs.questionInt('Please enter your second number');

const evaluate = (firstNum, secondNum) =>{
    if(input === '+'){
        return firstNum + secondNum;
    } else if (input === '-'){
        return firstNum - secondNum;
    } else if (input === '*'){
        return firstNum * secondNum;
    } else if (input === '/'){
        return firstNum / secondNum;
    }
    }
        result = evaluate(num1, num2);
        console.log(`The result is ${result}`);