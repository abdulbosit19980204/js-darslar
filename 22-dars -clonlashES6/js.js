let x = 10
let y = x
y = y + 5
console.log(x)
console.log(y);

let isMarried = false
let isArray = isMarried
isArray = true
console.log(isMarried);
console.log(isArray);

// obyekt va arraylardan nusxa olish
const number = {
    x: 10,
    y: 5,
}

const newNumber = number
newNumber.x = 20
console.log(number);
console.log(newNumber);
/*
bu yerdan bizga 
{ x: 20, y: 5 }
{ x: 20, y: 5 }
shu qiymat qaytariladi chunki obyektlarda havola yani reference bolgani uchun x ni qiyamati ozgartirilganda 
asosiy joydagi qiymat ozgaradi va butun obyekt boyicha tasir qilib qoladi
bu ni boshqa yollar bilan o'zgartirish mumkin
*/

/* quydagi funkisya yordamizda obyekt boyicha iteratsiya qilamzi va 
obyektimizni elementlarini boshqa ozgaruvchiga yuklab qoyamiz */

function nusxaObject(obj) {
    let objNusxa = {}

    for (let key in obj) {
        objNusxa[key] = obj[key]
    }
    return objNusxa
}

const newNum = {
    x: 25,
    y: 42,
    newObj: {
        color: "yellow",
        money: 5000,
        made: "china",

    }
}
const newNewNum = nusxaObject(newNum)
newNum.x = 75;
newNum.newObj.made = "Uzbekistan"
console.log("newNewNum = ", newNewNum);
console.log("newNum = ", newNum);

// object asign methodi 

const nobj = {
    a: 1,
    b: 2,
    c: {
        x: "x+5",
        y: "y+5"
    }
}

const newNobj = Object.assign({}, nobj)
console.log(newNobj)


// Array larni methodlari 

const arr = ['1', '5', '6']
const arr2 = ['2', '3', '4']

const sliceNumber = arr.slice()
sliceNumber[2] = 7
console.log(arr, "\n", sliceNumber);

//spread operatori
const mixarr = [...arr, ...arr2]
console.log(mixarr)