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