// let number = getMax(a, b);
// console.log(number);
// function getMax(a, b){
//     (a > b) ? a : b;
// }

let result = fizzBuzz(5);
console.log(result);
function fizzBuzz(input){
    if(typeof input !== 'number'){
        return 'Son emas!';
    }
    if((input % 3 === 0 && input % 5 === 0)){
        return 'FizzBuzz';
    }
    if(input % 3 === 0){
        return 'Fizz';
    }
    if(input % 5 === 0){
        return 'Buzz';
    }  
    
    return input;
}