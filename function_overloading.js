function sum(){
    if(arguments.length==0){
        console.log("You have not passed arugments");
    }else if(arguments.length==1){
        console.log("Pass at least two aruments");
    }else{
        let result=0;
        let length = arguments.length;
        for(i=0;i<length;i++){
            result=result+arguments[i];
        }
        console.log(result);
    }
}

sum();
sum(6);
sum(5,6);