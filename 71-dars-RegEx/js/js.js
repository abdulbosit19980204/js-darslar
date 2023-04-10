'use strict'

//RegExp ikkita parametr qabul qiladi bular pattern va flag
// new RegExp('pattern', 'flag') // Lekin bu syntax ishlatilmayati xozir


const name = prompt('What is your name', '')
const regExp = /a/g // flaglar g-global i-case-insensitive m-multiline
console.log(name.search(regExp)); // search method faqat birinchi moslikni topkuncha qidiradi
console.log(name.match(regExp)); //  match butun mosliklarni tekshirib chiqaradi va massiv qaytaradi bunga g flagini o'rnatish kerak boladi
// misol uchun promptdan abdulbosit abdusomad textni qabul qilsak 
// bizga ['a', 'a', 'a'] shu korinishdagi massiv qaytaradi
// agar flag o'rnatilmagan bolsa ['a', index: 0, input: 'abdulbosit abdusomad', groups: undefined] shu korinishda javob qaytaradi

const password = prompt('password', '')
    //replace  - methodi almashtirib beradi
console.log(password.replace(/./g, '*')); // ********* shu korinishda natija qaytaradi
// maxsus special character lar ni topish uchun \ dan foydalaniladi
console.log(password.replace(/\|/g, '*')); // bu yerda | belgini topish kerak boladi

// test method ni sinab koramiz test method bizga boolean qiymat qaytaradi
const RegExpTest = /abd/gi
console.log(RegExpTest.test(name)); // agar user kritgan name da abd degan jumla bolsa true qiymat qaytaradi bo'lmasa false
if (RegExpTest.test(name)) { console.log("Welcome ", name) } else { console.log(name, " is not admin") }

// additional expressions

// \d - digit   || \D - not a digit (number)
// \w - word    || \W - not a word              >>> bular topilayatgan ma'lumot turlarini aniqlaydi
// \s - space   || \S - not a space

const RegExpAdd = /\d/gi //agar user abdulbosit1998 degan malumot kiritsa 
console.log(name.match(RegExpAdd)); // ['1', '9', '9', '8'] shu korinishda javob qaytaradi