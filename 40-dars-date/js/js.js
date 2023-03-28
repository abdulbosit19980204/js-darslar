'use strict'

const now = new Date(),
    LDate = document.querySelector('#date'),
    LFullDate = document.querySelector('#fulldate'),
    LMonth = document.querySelector('#month'),
    LYear = document.querySelector('#year'),
    LHour = document.querySelector('#hour'),
    LUTCHour = document.querySelector('#utchour')
now.setHours(18)

LDate.textContent = String(now.getDate() + " - kun")
LMonth.textContent = String((now.getMonth() + 1) + " - oy")
LYear.textContent = String(now.getFullYear() + " - yil")
LHour.textContent = String("Soat: " + now.getHours())
LUTCHour.textContent = String("Mahalliy Soat: " + now.getUTCHours())
LFullDate.textContent = String("Full date: ", now)
console.log(now)