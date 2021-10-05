//nested objects


var accounts={
    1001:{acno:1001,password:"userone",balance:5000},
    1002:{acno:1002,password:"usertwo",balance:7000},
    1003:{acno:1003,password:"userthree",balance:8000},
    1004:{acno:1001,password:"userone",balance:9000},  
}
function login(acno,password){
    if(acno in accounts){
        let pwd=accounts[acno].password
        if(pwd==password){
            console.log("login success");
        }
        else{
            console.log("invalid password");
        }
    }
    else{
        console.log("Invalid accnt number");
    }
}
