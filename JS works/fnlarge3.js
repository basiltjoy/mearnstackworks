var n1 = 100;
var n2 = 500;
var n3 = 300;
function largeAmongThree(n1, n2, n3) {
    if ((n1 > n2) & (n1 > n3)) {
        console.log(n1);
    }
    if ((n2 > n1) & (n2 > n3)) {
        console.log(n2);
    }
    if ((n3 > n1) & (n3 > n2)) {
        console.log(n3);
    }
}
console.log(largeAmongThree(n1, n2, n3));

