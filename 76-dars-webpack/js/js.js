'use strict'

function firstModule(){
    this.sayHello = function(){
        console.log("Hello first Module");
    }
    this.sayBye = function(){
        console.log("First Module Goodbye");
    }
}

// modullarni eksport qilish uchun

module.exports = firstModule