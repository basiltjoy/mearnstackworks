var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]


// print number of available items
// function availedItems(product){
//    return product[3]!==0
// }
// var items=products.filter(availedItems)
// console.log(items);
// or we can try
// let availStock=0;
// for(items of products){
//    if(items[3]>0){
//        availStock++;
//    }
// }
// console.log(availStock);





// print number of items in shop
// console.log(products.length);




//print product names
// var details=products.map((product)=>product[1])
// console.log(details);



// stock items
// var items=products.filter(product=>product[3]!=0).map(product=>[product[1],product[3]])
// console.log(items);


//sort products stock wise
// products.sort((item1,item2)=>item2[3]-item1[3])
// console.log(products);


//sort based on price
// products.sort((item1,item2)=>item2[2]-item1[2])
// console.log(products);

//offer 5rs off for stock >50
// var items=products.filter(product=>product[3]>50).map(product=>[product[2]-5,product[1]])
// console.log(items);



//desc order of price
// var items=products.filter(product=>product[2]).sort((product1,product2)=>product2[2]-product1[2])
// console.log(items);



//desc order of stock
var items=products.filter(product=>product[3]).sort((product1,product2)=>product2[2]-product1[2])
console.log(items);


