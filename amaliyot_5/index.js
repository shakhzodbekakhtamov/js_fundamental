showPrimeNumbers(20);

function showPrimeNumbers(limit){
    for(let number=2; number<=limit; number++){
        let isPrime = true;
        for(let numeric=2; numeric<number; numeric++){
            if(number % numeric === 0){
                isPrime = false;
            }
        }
        if(isPrime) console.log(number); 
    }
}