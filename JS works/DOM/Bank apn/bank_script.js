
class Bank {
    createAccount() {
        let p_name = fname.value
        let account_number = acno.value
        let password = passwordd.value
        //  console.log(p_name, a_acno, pass);  //to prnt details
        let user = {                            //to cnvrt into object
            p_name, account_number, password
        }
        localStorage.setItem(user.account_number, JSON.stringify(user))
        alert("Account created")
        location.href = "./login1.html"
    }
    validateAccno(accno) {
        return accno in localStorage ? true : false
    }

    authenticate() {
        let account_number = acno1.value
        let password = password1.value
        if (this.validateAccno(account_number)) {
            let data = JSON.parse(localStorage.getItem(account_number))
            console.log(data);
            if (password == data.password) {
                alert("Login Success")
                sessionStorage.setItem("Accno", account_number)
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
        sessionStorage.removeItem("Accno")
        location.href = "./login1.html"
    }

    loggOut() {
        alert("Proceed?")
        location.href = "./login.html"
    }

    balanceEnquiry() {
        /*  alert("Processing request")
          let item = sessionStorage.getItem("Accno")
          if (item in localStorage) {
              let data = JSON.parse(localStorage.getItem(item))
              
              let my_div = document.createElement("div")
              my_div.innerHTML = `avl balance: ${data.balance}`
              document.querySelector("body").append(my_div)
          }
          else {
              console.log("Invalid Info Provided");
          }
  */
        alert("Processing request")
        document.getElementById("result").innerHTML = `your Acc balance: ${this.getBalance()}`
    }


    fundTransfer() {
        let to_accountnum = to_acno.value;  //receiver
        let c_accno = acno.value;           //receiver
        let amount = amt.value;
        if (to_accountnum == c_accno) {
            if (this.validateAccno(c_accno)) {
                if (amount <= Number(this.getBalance())) {

                    let user_acno = sessionStorage.getItem("Accno")

                    let payer_details = this.getAccountDetails(user_acno)
                    let receiver_details = this.getAccountDetails(c_accno)

                    receiver_details["balance"] += Number(amount)
                    localStorage.setItem(c_accno, JSON.stringify(receiver_details))

                    payer_details["balance"] -= Number(amount)
                    localStorage.setItem(user_acno, JSON.stringify(payer_details))
                    alert("TRANSACTION SUCCESSFULLY COMPLETED")
                }
                else {
                    alert("INSUFFICIENT BALANCE")
                }
            }
            else {
                alert("INVALID ACCOUNT NUMBER")
            }
        }
        else {
            alert("ACCOUNT NUMBER MISMATCH")
        }
    }


    getBalance() {
        let user = sessionStorage.getItem("Accno")
        let data = JSON.parse(localStorage.getItem(user))
        return data.balance
    }


    getAccountDetails(accno) {
        return JSON.parse(localStorage.getItem(accno))
    }



}
var bank = new Bank()
bank.createAccount


let user = {
    account_number: 1002,
    first_name: "akhil",
    password: "abcaa",
    balance: 5000
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





