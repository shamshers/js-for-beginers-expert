function greet(name){
    console.log("hello" + name + " how are you?");
}

let nam = "shamsher";
greet(nam)

function add(a,b){
    return a+b;
}
let number1=5;
let number2=6;

let result = add(number1,number2)

console.log("The add number is "+result)

//function expressions

let x = function (num){return num* num};
console.log(x(4));

//can be used as variable value for other variables
let y = x(3)
console.log(y)