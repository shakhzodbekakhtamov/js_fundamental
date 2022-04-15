let person = {
    ism: "Shahzod",
    familiya: "Aktamov",
    get fullName() {
        return person.ism + " " + person.familiya;
    },
    set fullName(value) {
        let fullNameArray = value.split(' ');
        if(fullNameArray !== 'string') throw new Error("String ma'lumot kiriting");

        person.ism = fullNameArray[0];
        person.familiya = fullNameArray[1];

    }
}

try {
    person.fullName = null;
}catch(error) {
    console.log("xatolik")
}
console.log(person);
