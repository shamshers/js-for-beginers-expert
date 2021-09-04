
/** Data Types
 * String   represent textual data 'hello'
 * Number   an integer or a floating point number 3 3.14 3e-3
 * Bigint   an integer with arbitary precision 1n etc
 * Boolean a data type whose tow values true and false
 * undefined    when variable is not intialize let b ;
 * null denotes a null value
 * Symbol   data type whose instance are unique and immutable let value = Symbol('hello')
 * Object key value pairs of collection of data let value ={}
 */

/** JavaScript String */

// Single quotes 'hello'
//Double Quotes : "Hello"
// Backticks : `Hello`

const name = 'shamsher'
const name1 ="Singh"

const result =`The name is ${name}  ${name1}`

console.log(result)

/***************** Java Script number 

const number1=2;
const number1 =3.14;
const number3 = 3e4  //  3 * 10^4

*/

const number1=3/0
console.log(number1) //Infinity

const number2 = -3/0
console.log(number2) // -Inifinity

const number3 ="abc"/3;
console.log(number3) // NaN


/** Bigint */

// BigInt value

const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
//const result2 = value2 + 1; 
//console.log(result2); 

/** JavaScript Boolean */

const dataChecked = true;
const valueChecked = false;


/** JS undefined */

let student = undefined;
console.log(student);

/** JS null */

const num=null; // NULL , Null


/** JS  Symbol */

const val1=Symbol('hello')
const val2=Symbol('hello')

console.log(val1===val2);

const stu={
    firsrName:'sam',
    lastName:null,
    class: 12
}

let data;
data =5;
data="JS program"

const name3 ='sam';
typeof(name3)