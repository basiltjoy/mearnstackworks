/*  var expr="%2+10+2%"
try{
    console.log(eval(expr));        //bring the doubtful code in try block
}
catch(error){
    console.log("error occured");   //executed to handle the error without breaking code execution flow
}
console.log("data commit");         //output
                                    //error occured ,data commit  ie,order is not disturbed     */

//error handling 


/* try{
    console.log (eval("%2*3*2"));
}
catch{
    console.log("Error in code");
}
console.log("hy");
console.log("Error is under processing"); */



/*
var expr="%10+20+30-2"
try{
    console.log(eval(expr)); 
}
catch{
    console.log("Error occured");
}
console.log("database");   */


/*
var age=10;
try{
    if(age<18){
        throw new Error("invalid age")  //a new class:Error is created
    }
    else{
        console.log(age);
    }
}
catch(error){                          //try and catch is necessary in error handling
    console.log(error);
}        */





