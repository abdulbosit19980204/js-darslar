let firstName = "Abdulbosit"
let NewName = new String(firstName) /* Bu satrimiz object qaytaradi */

console.log(firstName);
console.log(NewName);

// yuqorida bergan valuelarimizni qiyamatini korib chiqamiz

console.log(typeof(firstName)); //string
console.log(typeof(NewName)); //object


// car objectini yaratib koramiz o'zimiz uchun

let car = {
    motor: "X",
    color: "red",
    isAirbag: true,
    isSpeed: function() {
        console.log(300);
    }
}
let gm = {
    isAirbag: false,
}

// prorto yozdamida shu obyektimizni ulaymiz bu yerda car prototip vazifasini bajarib kelyapti

gm.__proto__ = car
console.log(gm);
console.log(gm.color);
console.log(gm.isAirbag)
gm.isSpeed();
// yuqoridagi __proto__ eski yol xisoblanadi

//xozirgi foydalaniladiga usuli esa Object.SetPrototypeOf yoki get ham bolishi mumkin

Object.setPrototypeOf(gm, car)
console.log(gm.motor);

let BMW = Object.create(car)
console.log(BMW);
console.log(BMW.color, BMW.isAirbag);