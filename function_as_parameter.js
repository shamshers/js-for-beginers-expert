function greet(){
    return "hello";

}

function nam(user,func){
    const message=func();
    console.log(`${message} ${user}`);
}

nam('AT&T',greet)