let student={};

student.name='john';
student.greet=function(){
    console.log("hello");
}

student.greet()

//JavaScript this keyword

const person={
    name:'john',
    age:30,

    greet:function(){
        console.log('this is '+ this.name)
    }

}

person.greet()

const person1 = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person1.greet();