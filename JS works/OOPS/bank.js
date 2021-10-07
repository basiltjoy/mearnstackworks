class bank {
    createAccount(p_name, acno, ac_type, min_bal) {
        this.p_name = p_name,
            this.acno = acno,
            this.ac_type = ac_type,
            this.balance = min_bal
    }
    deposit(amount) {
        this.balance += amount
        console.log(`your account ${this.acno} is credited with ${amount} and your balance is ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance > amount) {
            this.balance -= amount
            console.log("Transaction success");
        }
        else {
            console.log("Transaction failed");
        }

    }
}
var obj1 =new bank();
obj1.createAccount("akhil",1022,"savings",4500)
obj1.withdraw(1000)
obj1.deposit(3000)
console.log(obj1);