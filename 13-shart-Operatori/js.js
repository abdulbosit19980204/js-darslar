"use strict"
let hage = document.getElementsByClassName("age"),
    text = document.getElementsByTagName('h3'),
    age = +prompt("Hello! How old are you?", "")
if (age > 18 & age < 40) {
    text.textContent = 'Welcome!!!'
    console.log("Welcome")
} else {
    text.textContent = 'Afsuski yoshingiz tog`ri kelmaydi'
    console.log(age + " is not appropriate");
}