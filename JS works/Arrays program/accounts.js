var accounts = [
    [1000, "ram", "savings", 50000, true],
    [1001, "ravi", "current", 40000, true],
    [1002, "nikil", "savings", 5000, false],
    [1003, "jain", "current", 34000, false],
    [1004, "ajesh", "savings", 55000, true]
]

// sort the users wrt balance
// var acc=accounts.sort((acc1,acc2)=>acc2[3]-acc1[3])
// console.log(acc);


// print details of acno=1004
// var acc=accounts.filter(account=>account[0]=="1004")
// console.log(acc);

// is there any person with balance < 2000
// var acc=accounts.some(account=>account[3]<2000)
// console.log(acc);


// print name of users with in_active account
// var acc = accounts.filter(account => account[4] == true)
// console.log(acc);



// print details of user with max balance
// var max_balance=accounts.reduce((acc1,acc2)=>acc1[3]>acc2[3]?acc1:acc2)
// console.log(max_balance);


// print details of users with acc_type as savings anad balance > 25000
// var acc = accounts.filter(account => account[2] == "savings" & account[3] > 25000)
// console.log(acc);