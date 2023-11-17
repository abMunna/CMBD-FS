// 1 Solve the problem with Javascript  to find the maximum between two numbers. 
// (Hint: take 2 variables and find the maximum number between them)

console.log('Problem 1');

let num1 = 20;
let num2 = 10;

if(num1 > num2)
{
    console.log('num1 is greater.');
}
else{
    console.log('num2 is greater.');
}


// 2 Solve the problem with Javascript  to check whether a number is negative, positive or zero. 
// (Take single variable and check using if else condition)

console.log('Problem 2');

let newNumber = 10;

if(newNumber > 0)
{
    console.log("Number is Positive.")
}
else if(newNumber === 0)
{
    console.log("Number is Zero.")
}
else{
    console.log("Number is Negative.")
}

// 3 Solve the problem with Javascript  to check whether a number is divisible by 10 or not. 
// (Take single variable and check using if else condition)

console.log('Problem 3');

let isNumberDivisible = 50;

if(isNumberDivisible % 10 === 0)
{
    console.log("Number is divisible by 10");
}
else
{
    console.log("Number is not divisible by 10");
}

// 4 Solve the problem with Javascript  to check whether a number is even or odd. 

console.log('Problem 4');

let isNumberEvenOrOdd = 50;

if(isNumberEvenOrOdd % 2 === 0)
{
    console.log("Number is Even");
}
else
{
    console.log("Number is Odd");
}


// 5 Solve the problem with Javascript  to check whether a character is in the alphabet or not.

console.log('Problem 5');

let letter = 'b';


if(letter.toLowerCase() !== letter.toUpperCase())
{
    console.log('The character is an alphabet');
}
else
{
    console.log('The character is not an alphabet');
}


// 6 Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. 
//   (30 <=  is hot, 25 >= is cold , anyother value is normal)

console.log('Problem 6');

let temperature = 24;

if(temperature >= 30)
{
    console.log('Temperature is hot.');
}
else if(temperature <= 25) 
{
    console.log('Temperature is cold.');
}
else
{
    console.log('Temperature is normal.');
}


// 7 Solve the problem with Javascript  to find a maximum between three numbers. 
// (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

console.log('Problem 7');

let firstNumber = 1;
let secondNumber = 2;
let thirdNumber = 3;

if(firstNumber > secondNumber && firstNumber > thirdNumber)
{
    console.log('firstNumber is the largest Number.');
}
else if(secondNumber > firstNumber && secondNumber > thirdNumber)
{
    console.log('secondNumber is the largest Number.');
}
else if(thirdNumber > firstNumber && thirdNumber > secondNumber)
{
    console.log('thirdNumber is the largest Number.');
}


// 8 Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. 
//   Store the result in a variable and print “Even Number” or “Odd Number”.

console.log('Problem 8');

let checkNumber = 5;

let checker = checkNumber % 2 === 0 ? 'Even Number' : 'Odd Number';

console.log(checker);


// 9 Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. 
//   Print a message to the console reflecting the result.

console.log('Problem 9');

let numOne = 5;
let numTwo = 35;

if(numOne > 30 && numTwo > 30)
{
    console.log('numOne and numTwo are both greater than 30.');
}
else
{
    console.log('numOne and numTwo are not greater than 30.');
}


// 10 Write a JavaScript program that uses if-else statements combined with logical operators. 
//    The program should check if a person’s age is between 13 and 19. 
//    If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

console.log('Problem 9');

let personAge = 15;

if(personAge >= 13 && personAge <= 19)
{
    console.log('Teenager.');
}
else
{
    console.log('Not a teenageer.');
}