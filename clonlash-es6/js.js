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