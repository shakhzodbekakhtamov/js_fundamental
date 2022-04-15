const marks = [81, 74, 86, 59, 77];
console.log(calculateGrade(marks));

function calculateGrade(marks){
    let sum = 0;
    for(let mark of marks){
        sum += mark;
    }
    let avgr = sum / marks.length;
    if(avgr < 50) return 'E';
    if(avgr >= 51 && avgr <= 60) return 'D';
    if(avgr >= 61 && avgr <= 70) return 'C';
    if(avgr >= 71 && avgr <= 80) return 'B';
    if(avgr >= 81 && avgr <= 100) return 'A';
    
}

