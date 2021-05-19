/*
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
  // ... your code ...
    firstNum : 0,
    secondNum : 0,
    read(){
        let a = prompt('Enter First number')
        let b = prompt('Enter second number')
        this.firstNum = +a 
        this.secondNum = +b
    },
    sum(){
        return this.firstNum + this.secondNum 
    },
    mul(){
        return this.firstNum * this.secondNum
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


















