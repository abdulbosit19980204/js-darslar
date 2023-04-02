'use strict'
//documentdagi head tag idagi elementlarini chiqaradi
console.log(document.head);

//body dan
console.log(document.body);
//childe Nodes

console.log(document.body.childNodes)
console.log(document.body.childElementCount);
console.log(document.body.firstChild)
console.log(document.lastChild)
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild);

//parent Nodes

console.log(document.body.parentNode);
console.log(document.querySelector('#eventBtn').parentNode)
console.log(document.querySelector('#eventBtn').parentElement)

// data atributi yordamida ma'lumotolish
console.log(document.querySelector('[data-current="4"]'))
    //keyingi ma'lumotni olish uchun nextSibling dan foydalansih

console.log(document.querySelector('#evenBtn'))
console.log("next = ", document.querySelector('[data-current="4"]').nextElementSibling)
console.log("prev = ", document.querySelector('[data-current="4"]').previousElementSibling)

// node larni chiqarib tashlash 

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue
    }
    console.log(node)
}