'use strict'

function Car(name, color) {
   this.name = name
   this.color =color

   this.info = function(){
     console.log(`Name of ${this.name}, color is ${this.color}`);
   }

}

const bwm = new Car("BMW", "Black")
bwm.info() // Name of BMW, color is Black