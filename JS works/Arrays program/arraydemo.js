var expenses=[100,200,300,500,150,10000];

//  console.log(expenses);  // to access contents inside array

//  console.log(expenses[5]);  //to access content in particular position-array index
 
//  console.log(expenses.length); // to get length of an array



//to iterate an array
// for(i=0;i<expenses.length;i++) 
//  {
//    console.log(expenses[i]);
//  }



//while using 'of' operator to access array
// for(let data of expenses) 
// {
//    console.log(data);
// }



// to obtain total of an array
 var total=0;
 for(let data of expenses)
 {
    console.log(data);
    total=total+data   //or we can use total+=data
 }
 console.log(total);



//print all data <500
// for(let data of expenses)
// {
// if(amount<500){
//    console.log(amount);

//  console.log(amount<500?amount:" ");  //using ternary operator
// }



// expenses[1]=expenses[1]+200;
// expenses[1]+=200;  //to update an array element one of these method can be used
// console.log(expenses);
// }



//insert new element to end of array
// expenses.push(15000);
// expenses.push(20000);
// console.log(expenses);



//to remove an elemnt from end position
// expenses.pop();
// console.log(expenses);


