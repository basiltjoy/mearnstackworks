

class Bank {
    createAccount() {
        let p_name = fname.value
        let accno = acno.value
        let pass = password.value
        //  console.log(p_name, a_acno, pass);  //to prnt details
        let user = {                            //to cnvrt into object
            p_name, accno, pass
        }
       console.log(user);
       
    }
}
var bank = new Bank()
bank.createAccount



