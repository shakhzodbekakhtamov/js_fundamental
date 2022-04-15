let car = {
    name: 'Toyota',
    make: 'Estima',
    year: 2016,
    price: 50000
}

function showProperties(obj){
    for(let resault in obj){
        if(typeof obj[resault] === 'string'){
            console.log(resault, obj[resault]);
        }
    }
}
showProperties(car);