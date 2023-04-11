'use strict'

const car = {
    name: "BMW",
    color: "Black",
    get carName() {
        return this.name
    },
    set carName(name) {
        this.name = name
    },
    set carColor(color) {
        this.color = color
    }
}

console.log("car old => ", car.carName);
console.log("old car color => ", car.color);
car.carName = 'Merc'
console.log("car after set =>", car.carName);
car.carColor = "White"
console.log("Color after set => ", car.color);