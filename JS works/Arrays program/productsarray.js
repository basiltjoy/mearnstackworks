var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]


// print number of available items
// var product_0=(product)=>product[3]==0
function availedItems(product){
    return product[3]!==0
}
var items=products.filter(availedItems)
console.log(items);

// print number of items in shop
// var num=products.map((product)=>products.length)
// var details=products.map((product)=>product[1])
// console.log(num,details);


//print product names
// var details=products.map((product)=>product[1])
// console.log(details);




