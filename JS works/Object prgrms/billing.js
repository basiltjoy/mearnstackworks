var bill_details = [

    { bill_number: 1000, date: "17-09-2021", amount: 5000, payment_type: "card" },
    { bill_number: 1001, date: "17-09-2021", amount: 4000, payment_type: "cash" },
    { bill_number: 1002, date: "17-09-2021", amount: 6000, payment_type: "card" },
    { bill_number: 1003, date: "17-09-2021", amount: 2000, payment_type: "cash" },
    { bill_number: 1004, date: "18-09-2021", amount: 7000, payment_type: "cash" },
    { bill_number: 1005, date: "18-09-2021", amount: 4000, payment_type: "card" },
    { bill_number: 1005, date: "18-09-2021", amount: 4000, payment_type: "cash" },
    { bill_number: 1005, date: "18-09-2021", amount: 4000, payment_type: "card" },
    { bill_number: 1006, date: "18-09-2021", amount: 3000, payment_type: "cash" },
    { bill_number: 1007, date: "19-09-2021", amount: 4000, payment_type: "cash" },
    { bill_number: 1008, date: "19-09-2021", amount: 6000, payment_type: "cash" },
    { bill_number: 1005, date: "16-09-2021", amount: 10000,payment_type: "card" },
]

 var bill_data = []
 for (let bill of bill_details) {
     let date = bill.date;
     let sales = bill.amount;
     let paymnt = bill.payment_type;
     if (date in bill_data) {
         bill_data[date] += sales

     }
   else {
         bill_data[date] = sales;

     }
 }
// console.log(bill_data);

//sort date wrt payment

var b=bill_details.sort((amt1,amt2)=>amt2.amount-amt1.amount)
console.log(b);
