//const name ='john'

// single quotes 'hello'
// double quotes "hello"
// backticks `hello'

const name = 'Peter'
const name1 ="Jack"
const result=`the name are ${name} and ${name1}`;
console.log(result)

const a = 'hello'
console.log(a[1])

console.log(a.charAt(1))

// Immutable string
let b = 'hello'
b[0]='H'
console.log(b)

let c ='hello'
c ='Hello'
console.log(c)

const a = 'a'
const b ='A'
console.log(a==b) // false

//Java script multiline strings

const message1 = 'This is a long message '+
                'that spans acroos muliple lines'+
                'in th code'

const message2= 'This is a long message \
                that spans acroos muliple lines\
                in th code'

// JS string objects

const x = 'hello'
const y = new String('hello')
