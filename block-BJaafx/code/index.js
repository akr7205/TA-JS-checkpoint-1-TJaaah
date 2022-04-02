// 1. Using loops take 10 inputs from user and find the average of all the numbers.
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     let num = +prompt(`enter number ${i}`);
//     sum += num;
// }
// let avg = sum / 10;
// console.log(avg);

// 2. What will be the output of the code below

// ```js
// let i = 0;
// while (i < 3) {
//   println('hi');
//   i++;
// }
// ```
// error because println is not defined in javascript

// 3. Write a function named `getEvenSum` that accepts a parameter `max`. Return the sum of all even numbers. The value of max should default to 10.

function getEvenSum(max=10)
{
    let evensum=0;
    for(let i=2;i<=10;i+=2)
    {
        evensum=evensum+i;
    }
    return evensum;
}
console.log(getEvenSum());

// 4.odd sum
function getOddSum(max=10)
{
    let oddsum=0;
    for(let i=1;i<=10;i+=2)
    {
        oddsum=oddsum+i;
    }
    return oddsum;
}
console.log(getOddSum());

// 5. Write a function named `getProductOfDigits` that accepts a parameter `num`. It returns the product of all the digits in the number.
function getProductOfDigits(num)
{
    if(num<=0)
    {
        return 'return a valid input';
    }
    let product=1;
    while(num != 0)
    {
       product=product*(num%10);
       num=parseInt(num/10);
    }
    return product;
}
console.log(getProductOfDigits(123));

// 6. What will be the output of the following code below in multiple conditions? Explain with reason?

// ```js
// function check(num) {
//   if (num > 5) {
//     return 'Bigger than 5';
//   }

//   if (num < 5) {
//     return 'Smaller than 5';
//   }

//   return num;
// }

// check(10); // output   'Bigger than 5'
// check(1); // output   'Smaller than 5'
// check(5); // output    5
// ``` 

// 7. What will be the output of the following code given below? Explain the reason?

// ```js
// function getOutput(name) {
//   if (name === 'Arya') return 'You are arya';
//   if (name === 'John') return 'You are john';
//   return 'Who are you';
// }

// getOutput('Arya'); // what will be the output   'You are arya'
// getOutput('John'); // what will be the output  'You are john'
// getOutput(); // what will be the output   'Who are you'
// ```

// 8. What will be the output of the following code given below? Explain the reason?

// ```js
// function getOutput(name) {
//   if (name === 'Arya') console.log('You are arya');
//   if (name === 'John') console.log('You are john');
//   return 'Who are you';
// }

// getOutput('Arya'); // what will be the output 'You are arya'
// getOutput('John'); // what will be the output  You are john
// getOutput(); // what will be the output        'Who are you'
 
// ```

// 9. Can a function have multiple return statement? Give one example if possible and explain the reason.

function add(a,b)
{
    if(a<0 && b<0){
        return 'invalid value';
    }
    let sum=0;
    sum=a+b;
    return sum;
}

// return will exit from fuction
//10. What is the difference between for loop and while loop. What are the different place you can use them? Explain with example.
for (initialization condition; testing condition; 
    increment/decrement)
{
statement(s)
}

while (boolean condition)
{
loop statements...
}
// for is used when we know about intialization and incerement of value whereas while is use dwhen we decide to incement the value latter