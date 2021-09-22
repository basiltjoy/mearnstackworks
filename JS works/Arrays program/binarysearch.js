var arr = [10, 12, 11, 5, 13, 14, 12]
arr.sort((num1, num2) => (num1 - num2))
// console.log(arr);
var element = 10;
//num1-num2 --for comparison between num1 and num2
//num1-num2 -ascending order     num2-num1-descending order
var low = 0; upp = arr.length-1;  //arr.length starts from 1 as arr.index start from 0
var flag = 0;
while (low < upp) {
    mid = Math.floor((low + upp) / 2);
    if (element < arr[mid]) {
        upp = mid - 1;
    }
    else if (element > arr[mid]) {
        low = mid + 1
    }
    else if (element == arr[mid]) {
        flag = 1;
        break;
    }
}
console.log(flag == 0 ? "element not found" : "element found");


