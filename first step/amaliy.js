let circle = {
    radius: 2,
    get area() {
        return Math.PI * Math.sqrt(this.radius);
    }
}

console.log(circle.area);


let personJson = '{"age": 30, "name":"Shahzodbek"}';

try{
    let person = JSON.parse(personJson);
    if(!person.name) {
        throw new Error("Obyektning bunday xossasi yuq");
    }
    console.log(person.name);
}catch(error) {
    console.log("Error: ", error.message)
}
