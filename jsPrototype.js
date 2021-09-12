// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

console.log(Person.prototype)

// Prototype Inheritance

Person.prototype.gender='male'
console.log(Person.prototype)

console.log(person1.gender)
console.log(person2.gender)

// objectConstructorFuntion.prototype.key='value'

Person.prototype.greet=function(){
    console.log("hello " + this.name)
}

person1.greet()
person2.greet()

Person.prototype={gender :'female'}

const person3 = new Person()

console.log(person3.gender)