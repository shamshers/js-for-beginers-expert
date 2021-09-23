// throw expression;
/**
try{

    throw exception
}catch(error){

}
*/

const number = 40;
try {
    if(number > 50) {
        console.log('Success');
    }
    else {

        // user-defined throw statement
        throw new Error('The number is low');
    }

    // if throw executes, the below code does not execute
    console.log('hello');
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}

// TypeError , SyntaxError,ReferenceError,EvalError,InternalError and RangeError

// throw new ReferenceError('this is reference error')