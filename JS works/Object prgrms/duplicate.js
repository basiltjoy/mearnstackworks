var arr = [10, 11, 10, 20, 21, 21]
var duplicates = {}
for (let val of arr) {
    if (val in duplicates) {
        duplicates[val] += 1

    }
    else {
        duplicates[val] = 1
    }
}
console.log(duplicates);
