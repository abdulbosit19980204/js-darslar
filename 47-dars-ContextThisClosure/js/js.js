'use strict'

//context this
// this da doim nimas dur yashirilgan boladi yani nimagadur qaram boladi

function logger(a, b) {
    //function sozi bilan e'lon qilinganda windowga qaram boladi yani windowga osilgan boladi
    // agar use strict ishlatilmagan bolsa agar ishlatilgan bolsa undefined boladi 
    console.log("Window this bu yerda chiqarilmoqda: =>  ", this);

    function sum() {
        console.log("Bu yerda esa  sum ichidagi this korsatilyappti => ", this)
        return this.a + this.b
    }
    console.log("Bu yerda sum ning qiymati sum => ", sum());
}
logger(5, 8)

/*

// Closure  - Funksiya chaqirilayotgan o'zgaruvchini birinchi funksiya ichidan qidiradi so'ng globalga chiqadi agra ichida bolmasa

let a = 5;

function log() {
    // bu yerga a o'zgaruvchisini bermasak a ni yuqorida e'lon qilganimiz boyicha oladi  
    console.log(a);
    //aks xolda bu yerda misol uchun a= 20 berib qoysak a=20 natijani qaytaradi
}
*/


//2-) 

// object ichidagi this ni korib chiqamiz

const obj = {
    x: 10,
    y: 15,
    sum: function() {
        console.log(this);
    }
}

obj.sum()
    //{ x: 10, y: 15, sum: [Function: sum] } shu qiymatni qaytaradi
    // buyerdan korinib turibdiki object dagi this obejctga teng yani windowga emas objectga osiladiobejctga qaram boladi
    // Context object ichidagi methodda objectni o'ziga teng

obj = {
    x: 25,
    y: 35,
    sum: function() {
        // bu yerda korib turganimizdak this yaa bir funksiya ichiga kirgizildi
        function logger() {
            console.log(this);
        }
        logger()
    }
}

obj.sum()
    //undefined  - qiymat qaytarishini korishimiz mumkin boladi
    // chunki bu this hech qanday object ga mas funksiya ichidagi funksiyaga tegishli bolgani uchun agar 'use strict' ishlatilmasa window global objectni qaytaradi

//3-) Konstruktorlarda this nima ga tengligini korib chiqamiz

function Car(name, color) {
    this.name = name
    this.color = color
    this.isAirbag = true

}
// Context this funksiya konstruktorida yangi objectni examplyariga teng
const newCar = new Car('BMW', 'Black')
console.log(newCar);
//  Car { name: 'BMW', color: 'Black', isAirbag: true } shu qiymat qaytariladi