let a = [5, 7, 9, 11, 8, 7, 111, "a", "b", "w"]
console.log(a);
console.log(a[1])
for (i = 7; i < a.length; i++) {
    console.log(a[i])
}

// pop - massiv oxirgi elementini o'chiradi
a.pop()
console.log("<pop> ", a, " </pop>")

//push esa oxiriga elemnt qoshadi pushdi ichida kiritilishi kerak bolgan qiymat yoziladi
a.push("Bu yangi kiritilgan qiymat")
console.log("<push> ", a, "</push>")

//shift massivni boshida bitta element tashlab ketadi - lekin deyarlik ishlatilmaydi
a.shift()
console.log("<shift>", a, "</shift>")

// unshift boshiga element qoshadi
a.unshift("0")
console.log("<unshift>", a, "</unshift>")

// for of  - massivlarni iteratsiya qilish uchun ishlatiladi

for (let value of a) {
    console.log("of val", value)
}

// length - barcha elementlarni sanab chiqmaydi. Oxirgi element index ga 1 ni qoshib javobni chiqaradi lekin yana bir muhim xato bu orada bo'sh element qoldirib n - elementga qiymat qoshish
// a[99] = 100
// a[31] = 31
console.log("a length = ", a.length)
console.log(a)

// forEach - funksiya claback qaytaradi bu uchta parametr qabul qiladi. Bu forEach kop foydalaniladi

a.forEach(function(item, index, arr) {
    console.log(`${index}: ${item} into arr ${a}}`)
})

//Biror belgi bilan massivga o'tkazish yani ajratib olish uchun split methodida foydalaniladi

let kino = prompt("What is your fovorute movies", ""),
    kinoArr = kino.split(" ")
console.log("<kino>", kino, "</kino>")
console.log("<kinoArr>", kinoArr, "</kinoArr>")

// join esa massivlarni qoshib beradi
let kinojoin = kinoArr.join(" /")
console.log("<kinojoin>", kinojoin, "</kinojoin>")

//sort sartirofka qilib beradi
kinoArr.sort()
console.log(kinoArr)

let numSort = [77, 11, 2, 8, 99, 3, 4, 5, 7]
numSort.sort(compareFn)
console.log(numSort)

function compareFn(a, b) {
    return a - b;
}