/// factory function 
/// bunday factory function() kabu funksiyalarda asosan camelCase dan foydalanish dasturchilarda odat bo`lib 
/// qolgan

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('bu doira tuzish uchun funksiyalar');
        }
    }
}

const circle1 = createCircle(3);
console.log(circle1);


/// constructor function
/// constructor function() kabu funksiyalarda asosan PascalCase dan foydalanish dasturchilarda odat bo`lib 
/// qolgan
function Circle(){
    this.radius;
    this.draw = function(){
        ///
    }
}

const circle = new Circle(4);
circle.draw(2, 4);
circle.color = 'green';
delete circle.color;     /// obyektga qo`shilgan xossani o`chirish uchun esa delete dan foydalanamiz
console.log(circle);

console.log(circle1.constructor);
console.log(circle.constructor);