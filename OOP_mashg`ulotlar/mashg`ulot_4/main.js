let circle = {
    radius: 1,
    draw(){
        console.log('bu doira');
    }
}

for(let result in circle){
    console.log(result, circle[result]);
}

// for(let key of Object.keys(circle)){
//     console.log(key, circle[key]);
// }

for(let key of Object.entries(circle)){
    console.log(key);
}


/// bu kod obyektning xossalari bo`ylab yurishda ishlatilinadi bu for in iteratsiyasidan farq qiladi
/// faqat iteratsiya xususiyatiga ega bulmaganlar uchun xizmat qiladi  
// for(let keys of Object.keys(objectName)){

// }


/// bunday for of iteratsiyasining xususiyatidan yana biri bu hosil qilingan obyektning xossalari buyicha yurishda 
/// bu entries xossasi hisoblanadi
// for(let keys of Object.entries(objectName)){
    // console.log(elon qilingan uzgaruvchi);
// }