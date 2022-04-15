const SPEED_LIMIT = 70;
const SPEED_POINT = 12;
const KM_PER_POINTS = 5;

function checkSpeed(speed){
    if(speed < SPEED_LIMIT + KM_PER_POINTS){
        return('Harakatni davom etishga ruxsat');
    }else{
        let point = Math.floor((speed - SPEED_LIMIT)/KM_PER_POINTS);
        if(point >= SPEED_POINT){
            console.log('Guvohnoma olib qo\'yiladi');
        }
        else{
            console.log(point);
        }
        return 'Sizdagi pointlar soni ' + point + ' ga teng';
    }
}
let result = checkSpeed(74);
console.log(result);
