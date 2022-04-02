1. What is the difference between the two `sum` function given below?

```js
// first
function sum(a, b) {
  return a + b;
}

// second
function sum(a, b) {
  console.log(a + b);
}
```
In first sum we are returning value and in second sum we print output value

2. If we store the returned value of both functions above in variable `first` and `second` what will be the value of `first` and `second`.
first will return value and second will peint value in console.

3. What will be the output when you call above `sum` function (first) with three parameter like `sum(12, 24, 35)`. Explain why?
output will be 36 a=12 and b=24

4. Can you store the first `sum` function in a variable named `add`. If yes why? If no why?
   yes if we write let sum=funtion(a,b){
      return a + b;
   }

5. Declare a function named `sayHello` the accepts a parameter `name` and returns the name like `Hello Arya`.

function sayHello(name){
  return `Hello Arya`;
}

6. What will be the output of the function below and why?

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

showMessage();
```
Hello, John

7. What will be the output for `Output1` `Output2` and `Output3` in the code below.

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

alert(userName); // Output 1 john

showMessage(); // Output 2  Hello, John

alert(userName); // Output 3  john
```

8. What is a Anonymous Function give example of three functions.
An anonymous function is a function without a name. The following shows how to define an anonymous function:

let show = function() {
    console.log('Anonymous function');
};

show();

var greet = function (platform) {
    console.log("Welcome to ", platform);
};
  
greet("altcampus!");

let show = () => console.log('Anonymous function');

9. Can function declaration be a Anonymous Function? Explain
No we can not declare a Anonymous Function.We can ommit function name but we need function keyword to declare a function.

10. Give 5 example of good naming convention for defining a function. You can read the details below to do that.

```md
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
```
function getName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isGreater( numY , numZ ){
  if ( numY > numZ ){
    return `number Y is greater than number Z`
  } else if ( numY < numZ ){
    return `number Z is greater than number Y`
  }
}

function isInRange( l , u , n){
  return l < n && u > n ;
}

isInRange();

function checkType(dataType){
  return typeof dataType;
}

checkType();