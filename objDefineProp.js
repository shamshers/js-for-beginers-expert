const stud ={
    firstName:'sam'
}

Object.defineProperty(stud,"changeName",{
    set:function(value){
        this.firstName=value
    }
})

Object.defineProperty(stud,"getName",{
    get:function(){
        return this.firstName
    }
})

console.log(stud.firstName)

stud.changeName='ATT'

console.log(stud.firstName)

/** Object define prop syntax
 * Object.defineProperty(obj,prop,descriptor)
 * 
 */