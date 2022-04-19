// function min(a, b) {
//     if(a > b) return b;
//     else return a;
// }

// console.log(min(1, 2))


// function isEven(x) {
//     if(x == 0) return true;
//     else if (x == 1) return false;
//     else return isEven(x)-2;
// }

// console.log(isEven(5))


function count(word, str) {
    let wordList = word.split("");
    let sum = 0;
    for(let i=0; i < wordList.length; i++){
        if(wordList[i] == str){
            sum += 1;
        }
    }
    return sum;
}

console.log(count("support", "p"));
