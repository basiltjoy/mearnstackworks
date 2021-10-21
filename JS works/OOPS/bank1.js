class Bank {
    session = {}
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1004, password: "userfour", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
    }
    getAccountDetails() {
        return this.accounts
    }
    Authenticate(acno, password) {
        if (acno in this.accounts) {
            let pwd = this.accounts[acno].password
            if (pwd == password) {
                this.session["user"] = acno   //adding the login'd accnt to session
                console.log("login success");

            }
            else {
                console.log("invalid password");

            }
        }
        else {
            console.log("invalid ac.no");
        }
    }
    BalanceEnquiry(acno) {
        let balance = this.accounts[this.session["user"]].balance
        console.log(`User ac: ${this.session["user"]} balance: ${balance}`);
    }
    DebitTransfer(amount) {
        let fund = this.accounts[this.session["user"]].balance
        if (fund > amount) {
            let x = fund - amount
            console.log(`${amount} debited from user account:${this.session["user"]} available balance: ${x}`);
        }
        else {
            console.log("Insufficient Funds");
        }
    }
    CreditTransfer(to_acno, amount) {
        let from_acc = this.accounts[this.session["user"]].balance
        this.accounts[to_acno].balance += amount
        console.log(`${this.accounts[to_acno].acno} is credited with ${amount}`);
        console.log(`available balance in ${this.accounts[to_acno].acno} is ${this.accounts[to_acno].balance} `);
    }
    paymentHistory() {
        let user = this.session["user"]
        console.log("User Payment-Debit Transactions");
        console.log(this.accounts[user].transactions);
    }
    getTransactions() {
        let transaction_history = [];
        for (let account in this.accounts) {
            transaction_history.push(this.accounts[account].transactions)
        }
        console.log("Debit Statement of Accounts", transaction_history);
    }
    CreditTransactions() {                                                  //incomplete
        let transactions = this.getTransactions()
       for (let trans of this.transactions) {
            for (let tran of trans) {
                if (tran.to == this.session["user"]) {
                    console.log(tran);
                }
            }
        }
    }
}




var obj = new Bank()
obj.Authenticate(1002, "usertwo")
obj.BalanceEnquiry()
obj.DebitTransfer(100)
obj.CreditTransfer(1003, 100)
obj.paymentHistory()
obj.getTransactions()
// obj.CreditTransactions()











