let num = 9;

let person = {
    name: "Shahzodbek",
    age: 19
}

localStorage.getItem('number', num.toString);
let personInfo = localStorage.setItem("age", JSON.stringify(person));

console.log(JSON.parse(personInfo));