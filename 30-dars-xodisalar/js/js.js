'use strict'
let btns = document.querySelector('#btn'),
    btn1c = document.querySelector('#btn1'),
    bodycl = document.querySelector('body'),
    dlt = document.querySelector('#delete'),
    lnk = document.querySelector('#alink'),
    appn = document.querySelector('#appendN'),
    evbtn = document.querySelector('#eventBtn'),
    overlay = document.querySelector('.overlay'),
    link = document.querySelector('a')

// function hello() {
//     alert(prompt("Ismingizni kiriting") + " welcome")

// }

// const btn = document.querySelector('#btn')
// btn.onclick = function() {
//     alert('hello')
// }
// console.log(btn);


// btnclic.onclick = function() {
//     alert('hello')
// }

btns.addEventListener('click', () => {
    alert("va nihoyat")
})
btn1c.addEventListener('mouseenter', (event) => {
    bodycl.style.backgroundColor = " #ff05ff"
})
dlt.addEventListener('click', () => {
    lnk.remove()
    alert("o'chilirdi")
})

// appn.addEventListener('click', () => {
//     bodycl.append(lnk)
//     dlt.before(btns, btn1c)
//     alert("elementlar qayta qoshildi")

// })


const deleteElement = (evnt) => {
    evnt.target.remove()
    btns.remove()
}
btn1c.addEventListener('click', deleteElement)

let i = 0
const addElement = (evnt) => {
    i++
    alert("yana " + (3 - i) + " ta urunishingiz qoldi")
    if (i === 3) {
        evbtn.removeEventListener('click', addElement)
        alert("urinishlaringiz  tugagan")
    }
    console.log(i)
}
evbtn.addEventListener('click', addElement)

let eventCounter = 0
let addBtn = (evnt) => {
    eventCounter++

    bodycl.append(lnk)
    dlt.before(btns, btn1c)
    alert((eventCounter) + " - marta elementlar qayta qoshildi")

    if (eventCounter === 3) {
        appn.removeEventListener('click', addBtn)
        alert('Bugungi urunishlariz tugadi')
    }
}

appn.addEventListener('click', addBtn)

// child div ni bosganda mother divga ham tasir qiladi
const cb = (e) => {
    console.log(e.currentTarget)
}
evbtn.addEventListener('click', cb)
overlay.addEventListener('click', cb)

// broserni defaultini o'zgartrishni korib otamiz
link.addEventListener('click', (event) => {
    event.preventDefault()
    alert('Qabosyapsan bratishka koz bormi')
})