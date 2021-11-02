/*
class Bank {
    createAccount() {
        let p_name = fname.value
        let account_number = acno.value
        let password = passwordd.value
        let balance=ac_balance.value
        let user = {                            //to cnvrt into object
            p_name, account_number, password,balance
        }
        localStorage.setItem(user.account_number, JSON.stringify(user))
         alert("Account created")
        location.href = "./login.html"
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
        location.href = "./login.html"
    }

    loggOut() {
        alert("Proceed?")
        location.href = "./regn.html"
    }                                     

balanceEnquiry() {
    alert("Processing request")
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

    alert("Processing request")
    document.getElementById("result").innerHTML = `your Acc balance: ${this.getBalance()}`
}


/*   fundTransfer() {
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

bank.createAccount          */





class Bank {
    createAccount() {
        let cust_name = fname.value;
        let account_number = acno.value;
        let password = passwordd.value
        let balance = ac_balance.value
        let user = {
            cust_name, account_number, password, balance
        }
        localStorage.setItem(user.account_number, JSON.stringify(user))
        // swal("Successful!", "Account created,  Happy Banking!", "success");
        alert("Account Created")
        location.href = "./login.html"

    }

    validateAccno(accno) {
        return accno in localStorage ? true : false
    }

    authenticate() {
        let account_number = accno.value
        let pwd = password1.value
        if (this.validateAccno(account_number)) {
            let data = JSON.parse(localStorage.getItem(account_number))
            if (pwd == data.password) {
                alert("Login Success")
                location.href = "./userhome.html"
                sessionStorage.setItem("User", account_number)
            }
            else {
                alert("Login Failed")
            }
        }
        else {
            alert("Invalid Account Number")
        }
    }

    logout() {   //userhome
        sessionStorage.clear()
        location.href = "./login.html"
    }

    log_out() {      //login page
        localStorage.removeItem("account_number")
        location.href = "./Regn.html"
    }

    login() {
        location.href = "./login.html"
    }


    balanceEnquiry() {
        let user_ac = JSON.parse(sessionStorage.getItem("User"))
        let user_accbal = JSON.parse(localStorage.getItem(user_ac))
        alert("Processing request")
        document.querySelector("#result").innerHTML = `${user_accbal.balance}`
    }

    getBalance() {
        let useracc = JSON.parse(sessionStorage.getItem("User"))
        let ac_balance = JSON.parse(localStorage.getItem(useracc))
        return ac_balance.balance
    }
    fundTransfer() {
        let to_accountnum = to_acno.value;
        let amount = amt.value;
        if (this.validateAccno(to_accountnum)) {
            if (amount <= Number(this.getBalance())) {
                // alert("Transaction Processing")
                let receiver_details = JSON.parse(localStorage.getItem(to_accountnum))
                let receiver_balance = Number(receiver_details.balance)
                let rec_bal = receiver_balance + Number(amount)
               // document.querySelector("#result").innerHTML = `${receiver_details.account_number} is credited, avail balance:${rec_bal}`

                let useracc = JSON.parse(sessionStorage.getItem("User"))
                let user_bal = JSON.parse(localStorage.getItem(useracc))
                let user_accbal = Number(user_bal.balance) - Number(amount)
               // alert(`${useracc} is debited, avail balance:${user_accbal}`)
               alert("Transaction successfull")
            }
            else {
                alert("Insufficient Fund")
            }
        }
    }

    transactionHistory() {
        let trans = [];
        let amount = amt.value;
        let user_ac = JSON.parse(sessionStorage.getItem("User"))
        let user_accbalance = JSON.parse(localStorage.getItem(user_ac))
        let user_bal = Number(user_accbalance.balance) - Number(amount)

        let to_accountnum = to_acno.value;
     
        let receiver_details = JSON.parse(localStorage.getItem(to_accountnum))
        //let receiver_balance = Number(receiver_details)


        trans.push(user_accbalance.account_number, user_bal)
       // document.querySelector("#trans").innerHTML = `User: ${trans} has been debited with ${amount}`
        trans.push(receiver_details.account_number, receiver_details.balance)
        document.querySelector("#trans").innerHTML = `${trans[0]} debited with ${amount} Avail balance:${trans[1]} and 
                                                    ${trans[2]}credited, Avail balance: ${trans[3]}`

    }
}
var bank = new Bank();





