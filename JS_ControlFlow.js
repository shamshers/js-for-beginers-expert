/** JavaScript if --else statement
 * if statment
 * if..else statement
 * if..else if..else statemtent
 */
// syntax
/**
 * if(condtion){
 * the body of if
 * }
 */

// check if the number is positive

const number = -6;

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}

console.log("The if statement is easy");

/** if..else statement
 * if(condition){
 *  block of code if conditiotn is true
 * }else{
 * block of if condition is false
 * }
 */

// check if the number is positive or negative/zero

//const number = 6;

// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

console.log("The if...else statement is easy");

/** if..else if statement
 * if(condition1){
 * code block 1
 * }else if(condition2){
 * code block 2
 * }else{
 * code block 3
 * }
 */

// check if the number if positive, negative or zero
//const number = prompt("Enter a number: ");


// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");

/** Nested if..else statement
 * 
 */

// check if the number is positive, negative or zero
const num = 0;//prompt("Enter a number: ");

if (num >= 0) {
    if (num == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}