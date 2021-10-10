class Bank {
    Account(ac_name, ac_no, ac_type, ac_balance) {
        this.ac_name = ac_name;
        this.ac_no = ac_no;
        this.ac_type = ac_type;
        this.ac_balance = ac_balance;
    }
    deposit(amount) {
        this.ac_balance += amount
        console.log(`your account ${this.ac_no} has been credited with ${amount} and your ac.balance:${this.ac_balance}`);
    }
    withdraw(amount) {
        if(this.ac_balance>=amount){
            this.ac_balance-=amount
            console.log(`your account ${this.ac_no} has been debited with ${amount} and ac.balance:${this.ac_balance} `);
        }
        else{
            console.log(`insufficient Fund in ${this.ac_no}`);
        }
    } 
}
var obj1=new Bank();                          //initialising object                      
obj1.Account("Amal",1002,"savings",9000)     //creating accnt details
obj1.deposit(1000)
obj1.withdraw(10000)
 console.log(obj1);
