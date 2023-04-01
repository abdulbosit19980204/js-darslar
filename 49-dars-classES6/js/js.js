'use strict'

//Class nomalri har doim kattada boladi
class Car {
    //constructori 
    constructor(name, color, speed) {
        this.name = name
        this.color = color
        this.speed = speed
    }

    //method
    calcSpeed() {
        return this.speed * 100
    }
}

const BMW = new Car("BMW", "red", 300),
    damas = new Car("Damas", "Oq", 120),
    nexia3 = new Car("Nexia 3", "Qora", 180)

console.log(BMW.calcSpeed() + " km/h");
console.log(BMW);

// Class dan voris olish buning uchun extends dan foydalaniladi
class Spark extends Car {
    constructor(name, color, isAirbag, extraBallon, speed) {
        //super yordamida avvalgi class dan qiymatni olamiz
        super(name, color, speed)
        this.isAirbag = isAirbag
        this.extraBallon = extraBallon
    }

    logger() {
        console.log(`Name of car ${this.name}, color is ${this.color}, airbag is ${this.isAirbag} and extra ballon ${this.extraBallon}, it can run about ${this.calcSpeed(this.speed)} km/h`);
    }
}

const daewo = new Spark("Spark", "oq", "yoq", 2, 1)
daewo.logger()
console.log("speed is = " + daewo.calcSpeed() + " km/h");