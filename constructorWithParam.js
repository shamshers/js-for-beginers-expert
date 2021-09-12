function Person(person_name,person_age,person_gender){
    this.name=person_name
    this.age=person_age
    this.gender=person_gender

    this.greet=function(){
        return ("Hi " + this.name)
    }
}

const person1=new Person('sam',30,'male')
const person2= new Person('meena',30,'female')

console.log(person1.name)
console.log(person2.name)

// Object literals are used to create a single object
//Consturctor function are used to create multiple object

/**
 * 
 * let person={
 * name:'sam'
 * }
 * 
 * function Person(){
 *  this.name='same
 * }
 * const obj1 = new Personn();
 * const obj2= new Person();
 */