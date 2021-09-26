var n1 = 500;
var n2 = 1000;
var n3 = 300;
function secondLarge(n1, n2, n3) {
    if ((n1 > n2) & (n1 > n3)) {
        console.log(n1);
    }
    else if ((n2 > n3) & (n2 < n1)) {
        console.log(n2);
    }
    else if ((n3 < n1) & (n3 < n2)) {
        console.log(n3);
    }
}
console.log(secondLarge(n1, n2, n3));

