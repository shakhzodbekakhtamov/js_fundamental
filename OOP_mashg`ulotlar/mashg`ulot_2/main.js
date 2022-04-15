function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('bu doira');
    }
}

const circle = new Circle(4);
// Circle.call({}, 4);
// Circle.apply({}, [4, 5]);
console.log(circle);