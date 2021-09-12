/** js have two kind of object porperties
 * 
 * Data properties
 * Accessor properties
 * 
 * 
 */

// Data Property

const stu={
    //data property
    firstName:'sam'
}

//Accessor property
// get - to define a getter method to get the property value
// set - to define a setter method to set the property value

const student ={
    firstName:'sam',

    get getName(){
        return this.firstName
    }
}

//accesing data property
console.log(student.firstName)

//accessing getter method
console.log(student.getName)

//trying to access as a method
//console.log(student.getName())

const stud={
    firstname:'automation',
    set changeName(newName){
        this.firstname=newName
    }
}

console.log(stud.firstname);

stud.changeName='ATT'

console.log(stud.firstname)

