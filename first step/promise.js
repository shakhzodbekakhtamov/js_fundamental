let dokonOchiq = true;

let mavhumNatija = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            if(dokonOchiq){
                let bookInfo = {
                    title: "Mukammal dasturlash",
                    author: "Javlon Abdullo",
                    price: 60000
                }
                resolve(bookInfo);
            }
            else{
                let result = new Error("Dokon allaqachon yopilgan");
                reject(result);
            }
        }, 1500)
    }
)

mavhumNatija
        .then(natija => console.log(natija))
        .catch(error => console.log(error.message));