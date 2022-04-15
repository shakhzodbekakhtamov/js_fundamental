let circle = {
    radius: 1,
    draw(){
        console.log('bu doira');
    }
}

// const clone = {};
// for(let key in circle){
//     clone[key] = circle[key];
// }

// const clone = Object.assign({}, circle);
const clone = {...circle};
console.log(clone);