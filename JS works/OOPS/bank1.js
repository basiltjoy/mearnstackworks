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
            acno: 1001, password: "userone", balance: 9000,
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

    authenticate(accno, password) {

        // validate account number
        if (accno in this.accounts) {

            let pwd = this.accounts[accno].password;
            if (pwd == password) {
                this.session["user"] = accno
                // session={"user":1001}
                console.log(this.session);
                return 1;
                //login success
            }
            else {
                return 0;
                //invalid password
            }
            pwd == password ? 1 : 0

        }
        else {
            return -1;
            //-1 for invalid account number
        }

    }

    balanceEnquiry() {

        //session{"user":1001}
        let balance = this.accounts[this.session["user"]].balance
        console.log(balance);

    }

}

var obj = new Bank()
var user = obj.authenticate(1002, "usertwo")
obj.balanceEnquiry()
