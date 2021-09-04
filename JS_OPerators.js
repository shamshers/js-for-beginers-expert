/**OPerators
 * Assisgnment 
 * Arthimetic
 * Comaprision
 * Bitwise
 * String
 * Other operators
 */


/**Assignment Operators
 * =    assisgnment operator    a=9
 * +=   addition operator   a+= 5 => a=a+5
 * -+   subtraction
 * *=   multiplicatio
 * /= divison
 * %=   remainder
 * **=  exponential
 */

/** Arthmetic Operators 
 * +
 * -
 * *
 * /
 * %
 * ++   incremental by 1 ++x or x++
 * -- decrement by 1 --x or x--
 * ** exponential power a ** b
*/

let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y);  // 8

// subtraction
console.log('x - y = ', x - y);  // 2

// multiplication
console.log('x * y = ', x * y);  // 15

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
console.log('x % y = ', x % y);   // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);

/** Comaprision Operators 
 * ==
 * !=
 * ===  Strict eaqual to    if the operands are equal and of the same type
 * !== strict not equal to  if the operands equals but of different type or not equal at all
 * >
 * <
 * >=
 * <=
*/

const a = 3, b = 2;
console.log(a > b); // true 

// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

/** Logical Operators 
 * &&
 * ||
 * !
*/

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false

/** Bitwise Operators
 * &   bitwise AND
 * |    bitwise OR
 * ^    Bitwise XOR
 * ~    Bitwise NOT
 * <<   Left shift
 * >>   right shift
 * >>>  zero-fill right shift
 */

/** String Operators 
*/

// concatenation operator
console.log('hello' + 'world');

let a1= 'JavaScript';

a1 += ' tutorial';  // a = a + ' tutorial';
console.log(a1);

/** Type Conversion 
 * Implict  automatic type conversion
 * Explicit     manual type conversion
*/

// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"


// numeric string used with - , / , * results number type

let result1;

result1 = '4' - '2'; 
console.log(result1); // 2

result1 = '4' - 2;
console.log(result1); // 2

result1 = '4' * 2;
console.log(result1); // 8

result1 = '4' / 2;
console.log(result1); // 2clear


// non-numeric string used with - , / , * results to NaN

let result2;

result = 'hello' - 'world';
console.log(result2); // NaN

result = '4' - 'hello';
console.log(result2); // NaN


let res;

// string to number
res = Number('324')
console.log(res);

res=Number(324e-1)
console.log(res)


result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20


result=String(324)
console.log(result)

result =Boolean('')
console.log(result)

result=Boolean(0)
console.log(result)

result=Boolean(324)
console.log(result)
