var products = {
    p_code: 100,
    p_name: "P1",
    price: 1000,
    stock: 50
}

//print products objects
// console.log(products);


//product name
console.log(products.p_name);


//update stock +30
console.log(products.stock);
console.log("updated stock");
console.log(products.stock+=30);


//check for discount key
console.log("discount" in products);

//add discount key
// products["discount"]="10%"
// console.log(products);
// products.discount="10%";
// console.log(products);

products["discount"]="10%"
console.log(products);