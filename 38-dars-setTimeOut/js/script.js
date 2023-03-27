'use strict';

// nechidur secundan keyin qandeydur funksiyani ishga tushurish
//setTimeout, setInterval, clearInterval

/* 1-) settimeout

setTimeout(() => {
  
}, timeout);
*/
// setInterval(() => {
//     for (let i = 0; i < 15; i++) {
//         setInterval(() => {
//             console.log(i, ' - set time out ishlayapti')
//         }, 10000);
//     }
// }, 5000);

/* 2-)
setInterval(() => {
  
}, interval);
*/



// let timerId,
//     i = 0;
// const btn = document.querySelector('#btn')

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 1000)
// })
// clearInterval(timerId)

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId)
//     }
//     console.log('set time out')
//     i++;
//     console.log(i)
// }

// // id yimiz ishga tushushdan oldin 6 sekun kutadi keyin asosiy funksiya dagi 3 ishga tushadi 
// let id = setTimeout(function log() {
//     console.log('hello log');
//     id = setTimeout(log, 600)
// }, 300)


const btn = document.querySelector('#btn'),
    rBtn = document.querySelector('#Rbtn'),
    carImg = document.querySelector('.car img'),
    sBtn = document.querySelector('.sBtn')



function myAnimation() {
    let timerId = setInterval(frame, 1),
        i = 0,
        pos = 0

    const car = document.querySelector('.car')

    function frame() {
        if (pos == 800) {
            carImg.style.transform = ' rotateY(0deg)'
            clearInterval(timerId);
        } else {
            pos++;
            car.style.left = pos + 'px'
            console.log(pos);
            sBtn.textContent = pos + ' km'
        }
    }
}


function rotateBack() {
    let timerId = setInterval(frame, 5),
        pos = 800
    const car = document.querySelector('.car')
    console.log(Number(car.style.left));


    function frame() {
        if (pos == 0) {
            carImg.style.transform = ' rotateY(180deg)'
            clearInterval(timerId);

            console.log(pos);
        } else {
            pos--;
            car.style.left = pos + 'px'
            console.log(pos);
            sBtn.textContent = pos + ' km'
        }
    }
}

btn.addEventListener('click', () => {
    carImg.style.transform = ' rotateY(180deg)',
        myAnimation()
})
rBtn.addEventListener('click', () => {
    // carImg.classList.add('rotateCar'),
    carImg.style.transform = ' rotateY(0deg)'
    console.log('rotate');
    rotateBack()
    console.log(carImg)
})