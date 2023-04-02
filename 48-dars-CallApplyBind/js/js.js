'use strict'

function logger(speed) {
    console.log(this)
        //Apply yoki call bilan context ni car ga ilganimizdan song uni methodlarini chaqirishimiz mumkin
    console.log(this.name);
    //Bizga Mers degan qiymatni print qilib beradi bu faqat call yoki apply qilingandagina ishlaydi ikkosidan birini ishlatish kifoya
    //call Vs Apply ni korib otamiz

    console.log(
        `My car is ${this.name} and it is color is ${this.color}. It is Max speed ${speed} km/h`
    );
}

const car = {
    name: 'Mers',
    color: 'White',
}

// logger()
//Bu yerda logger funksiyamiz undefined qiymat qaytaradi

//endi thisimizni carga ilib qoyamiz buning uchun bizga call,apply dan foydalanishimiz mumkin bularning vazifasi deyarlik birxil

// logger.call(car)
// logger.apply(car)

/*
bu uchovi logger funksiyamizni chaqirilishidan quydagi qiymatlar kelib chiqadi

undefined => logger() 
{ name: 'Mers', color: 'White' } => logger.call(car)
{ name: 'Mers', color: 'White' } => logger.apply(car)

*/

// Call bilan Apply ni farqini korib chiqamiz: Agar bularni argumentiga qiymat berganda farq qiladi 
// call ga qiymat odatiy xolda berilsa 
// Apply ga esa parametr [] massiv korinishida beriladi

logger.call(car, 200)
logger.apply(car, [500])

/*

{ name: 'Mers', color: 'White' }
Mers
My car is Mers and it is color is White. It is Max speed 200 km/h
{ name: 'Mers', color: 'White' }
Mers
My car is Mers and it is color is White. It is Max speed 500 km/h

*/


//Bind - (uzb Bog'lamoq ) bilan tanishib chiqamiz

function calc(number) {
    return this * number
}
let n = document.querySelector('h2'),
    p = document.querySelector('p')

console.log("n = ", Number(n.textContent))

slider.addEventListener('input', () => {

    const multipleN = calc.bind(Number(n.textContent))
    console.log("Multiple 3 => ", multipleN(3));

})