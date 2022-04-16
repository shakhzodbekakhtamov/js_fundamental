function personInfo() {
    personName = this.personName;
    age = this.age;
    isMarried = this.isMarried;

    personName = function() {
        console.log("O'zgartirilgan ism: ", this.personName);
    }
}

let shahzod = new personInfo("Shahzodbek", 19, false);
console.log(shahzod);





