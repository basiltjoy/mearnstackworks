var pattern = "ABCABB"
var word_count = {}
for (char of pattern) {
    if (char in word_count) {
        console.log(char,"is the first recursive char");
        break;
}
    else {
        word_count[char] = 1
    }
}