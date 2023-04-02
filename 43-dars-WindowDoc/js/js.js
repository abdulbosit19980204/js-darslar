'use strict'
const box = document.querySelector('.box'),
    //client bilan scrollgacha bolgan masofa olinadi
    // width = box.clientWidth,
    // height = box.clientHeight

    //offset bilan esa butun razmer olinadi    
    width = box.offsetWidth,
    height = box.offsetHeight,

    //box ni asl uzunligini topish

    scrollHeight = box.scrollHeight

console.log("width:  ", width, "height: ", height, "scrollHeight: ", scrollHeight);

const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px'
    console.log('btn')
})

//scrollTop  - tepada qancha borligini tekshirib beradi
let size = 0
setInterval(() => {
    size = box.scrollTop
    return size
}, 10)

console.log(size);

setInterval(() => {
    if (size > 300) {
        box.style.backgroundColor = "red"
    } else {
        box.backgroundColor = "blue"
    }
    console.log(size);
}, 1);

//computed stylarni o'zgartirish

const style = window.getComputedStyle(box)
console.log(style);

// documentni width va heightlarini olish

console.log("document height:  ", document.documentElement.clientHeight);
console.log("document width: ", document.documentElement.clientWidth);