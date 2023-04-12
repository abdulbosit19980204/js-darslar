'use strict'

class Car{
    constructor(name, color, bonus){
        this.name = name
        this.color =color
        this._extaraBonus = bonus
        // _ - classlarda inkapsulyatsiya ma'nosini anglatadi qiymatlarni o'zgartirish uchun get va set methodlari o'rnatilgan boladi
    }
    info(){
        console.log(`Name of the car ${this.name}, color is ${this.color} and bouns is ${this._extaraBonus}`);
    }
    get bonus(){
        return this._extaraBonus
    }
    set bonus(bonus){
        if(typeof bonus =='number' && bonus>0 && bonus<100){
            this._extaraBonus = bonus
        }else{
            console.log("There are many bonus or something sent wrong");
        }
    }

}

const bmw = new Car('BMW', 'black', 10)
bmw.info()
bmw.bonus
console.log(bmw.bonus = 50);
bmw.info()

