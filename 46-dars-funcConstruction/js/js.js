const num = new Number("5")
console.log(typeof num, num);
//BU yerda Number qaytaradi chunki biz buni belgilab qoyganmiz natija esa quydagicha boladi: => object [Number: 5]

const calculation = new Function()
console.log(typeof calculation, calculation);
//function [Function: anonymous] bu usuldan xozir foydalanilmaydi lekin shundek ishlatish mumkin

// quydagi funksiyadagi this o'zgaruvchi elon qilish xisobida ishlatilmoqda
function Car(name, color, mph) {
    this.name = name
    this.color = color
    this.mph = mph
    this.isAirbag = true
    this.speed = function() {
        console.log(`Speed of car ${this.name} is ${this.mph}`)
    }

}

// biz tepada elon qilgan funksiyani obeject  kabi ishlatib koramiz
const Bmw = new Car('bmw', 'red', 320, false)
const Mers = new Car('Mers', 'black', 100)
console.log(Bmw, '\n', Mers);
//Car { name: 'bmw', color: 'red', isAirbag: true } Car { name: 'Mers', color: 'black', isAirbag: true }

Bmw.speed()
Mers.speed()
    /*
    Speed of car bmw is 320
    Speed of car Mers is 100
    */

//Eslatma Fuksiya Constructorlari katta harfda yoziladi

//Funksiyag prototype yozamiz

Car.prototype.wayCalc = function(runningTime) {

    let way = (Number(`${this.mph}`) * runningTime)
    console.log(`${this.name} is about ${way} km running at ${runningTime} hours`);
}

Bmw.wayCalc(5)
Mers.wayCalc(5)