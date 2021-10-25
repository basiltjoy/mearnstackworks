
class Bank {
    createAccount() {
        let p_name = fname.value
        let accno = acno.value
        let pass = password.value
        //  console.log(p_name, a_acno, pass);  //to prnt details
        let user = {                            //to cnvrt into object
            p_name, accno, pass
        }
        localStorage.setItem(user.accno, JSON.stringify(user))
        alert("acc created")
        location.href = "./login1.html"
    }
    validateAccno(accno) {
        return accno in localStorage ? true : false
    }

    authenticate() {
        let account_number = acno1.value
        let pwd = password1.value
        if (this.validateAccno(account_number)) {
            let data = JSON.parse(localStorage.getItem(account_number))
            if (pwd == data.password) {
                alert("Login Success")
                sessionStorage.setItem("Acc", account_number)
                location.href = "./userhome.html"
            }
            else {
                alert("Login Failed")
            }
        }
        else {
            alert("Invalid Account number")
        }
    }

    logout() {
        alert("User Logged out")
        sessionStorage.removeItem("Acc")
        location.href = "./login1.html"
    }

    balanceEnquiry() {
        alert("Processing request")
        let item = sessionStorage.getItem("Acc")
        if(item in localStorage){
            let data=JSON.parse(localStorage.getItem(item))
            console.log(data);
        }
        else{
            console.log("Invalid Info Provided");
        }

    }

    fundTransfer(amount,to_acc){
        let from_ac=sessionStorage.getItem("Acc")
        let data=JSON.parse(localStorage.getItem(from_ac))
        if(data.balance>=debit.value){
          //  data.balance=localStorage.setItem(data.balance-debit.value)
            alert("Transaction successful");
        }
        else{
            alert("Transaction failed");
        }

    }

}
var bank = new Bank()
bank.createAccount


let user = {
    account_number: 1001,
    first_name: "aswanth",
    password: "abca",
    balance: 3000
}


/*
// to  insert an accnt in localstorage
localStorage.setItem(user.account_number, JSON.stringify(user))


//check if accno in localStorage
function validateAccno(accno) {
    if (accno in localStorage) {
        return true;
    }
    else {
        return false;
    }
}
    console.log(validateAccno(1004));

/*
    //get balance of an accno
    function getBalance(accno) {
        if (validateAccno(accno)) {
            let data = JSON.parse(localStorage.getItem(accno)) //parse will cnvrt string to object
            return data.balance
        }
        else {
            return "invalid"
        }
    }
    // console.log(getBalance(1003));


    //get authentication of accno
    function authenticate(accno, pwd) {
        if (validateAccno(accno)) {
            let data = JSON.parse(localStorage.getItem(accno))
            if (pwd == data.password) {
                return "login success"
            }
            else {
                return "login failed"
            }
        }
    }
    console.log(authenticate(1001, "abc1234"));





function fundTransfer(from_ac, to_ac, amount) {

}
 */





