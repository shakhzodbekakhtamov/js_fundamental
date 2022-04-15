function callBack(firstName, secondName, age, callback) {
    console.log(`My name is ${firstName} ${secondName}. I am ${age} years old`);
    callback();
}

function ageInfo() {
    console.log("Tanishganimdan hursandman");
}

callBack("Shahzodbek", "Aktamov", "18", ageInfo);