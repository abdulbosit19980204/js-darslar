'use strict'

const now = new Date(),
    LDate = document.querySelector('#date'),
    LFullDate = document.querySelector('#fulldate'),
    LMonth = document.querySelector('#month'),
    LYear = document.querySelector('#year'),
    LHour = document.querySelector('#hour'),
    LUTCHour = document.querySelector('#utchour')

// vaqtni o'rnatish set orqali amalga oshiriladi 
now.setHours(18)

//get orqali esa ma'lumotni o'qib olamiz
LDate.textContent = String(now.getDate() + " - kun")
LMonth.textContent = String((now.getMonth() + 1) + " - oy")
LYear.textContent = String(now.getFullYear() + " - yil")
LHour.textContent = String("Soat: " + now.getHours())
LUTCHour.textContent = String("Mahalliy Soat: " + now.getUTCHours())
LFullDate.textContent = String("Full date: ", now)
console.log(now)

// quydagi skillni xisoblab koramiz

let start = new Date()

for (let i = 0; i < 100000; i++) {
    let some = i ** 3
    console.log(some)
}

let end = new Date()

console.log('Loop compily time is ', end.getTime() - start.getTime())

LFullDate.textContent = ("Loop compily time is " + (end.getTime() - start.getTime()) + " millisecond")