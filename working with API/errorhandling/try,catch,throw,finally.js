/*
var ph_no="949748570811"
try{
    if(ph_no.length!=10){
        console.log("Invalid number");
    }
    else{
        console.log("valid num");
    }
}
catch(error){
    console.log(error);
}   */


//when implementing throw method with try-catch
/*
var ph_no="9497485708"
try{
    if(ph_no.length!=10){
        throw new Error("Invalid num")
    }
    else{
        console.log("valid num");
    }
}
catch(error){
    console.log(error);
} */



//validate accnt number

var acc_no="123456"
try{
    if(isNaN(acc_no)){
        throw new Error("Invalid Number") 
    }
    else{
        console.log("valid acc no");
    }
}
catch(error){
    console.log(error);
}
finally{             //code which is strictly to be executed even if an error occured-finally session
    console.log("anyway proceed");
}