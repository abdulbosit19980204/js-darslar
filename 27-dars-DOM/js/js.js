'use strict'
//documentdan Id boyicha ma'lumot olish
let box = document.getElementById('box')
console.log(box);
// Tag name boyicha
let buttuons = document.getElementsByTagName('button')
console.log(buttuons);
//Class name boyicha
let circles = document.getElementsByClassName('circle')
console.log(circles);
// they are old way

// this is new way
// query selector - faqat bitta qiymat qaytaradi
let heart = document.querySelector('.heart')
console.log(heart);

// quer sellector all - barcha qiymatlarni qaytaradi

let hearts = document.querySelectorAll('.heart')
console.log(hearts);
hearts.forEach((item) => {
    console.log(item);
})

let wrapper = document.querySelector('.wrapper')
console.log(wrapper);
//documentni o'rniga biror element ichidan ham olish mumkin
// wrapper ni ichidan olamiz
let heartC = wrapper.querySelectorAll('.heart')
console.log(heartC);