
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let person1 = new Person();
let person2 = new Person();

Person.prototype.gender='male';

console.log(person2.gender)
console.log(person1.gender)

