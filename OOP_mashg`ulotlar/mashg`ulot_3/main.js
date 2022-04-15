// let number = 1;
// function increase(number){
//     number++;
//     console.log('inside: ', number);
// }
// increase(number);
// console.log('outside: ', number);

let obj = {value: 1};
function increase(obj){
    obj.value++;
    console.log('inside: ', obj);
}
increase(obj);
console.log('outside: ', obj);