var arr = [1, 2, 3, 4]

for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
        if (arr[i] + arr[j] == 5) {
            console.log(`element pair: ${arr[i]} ${arr[j]}`); 
    break;
        }

    }
}