'use strict'

const cars = ['Bmw', 'MerC', 'DamAS', 'cObaLt']
    //map - yangi massiv qaytaradi

const carsToLower = cars.map((item) => item.toLocaleLowerCase())
console.log(carsToLower);
// [ 'bmw', 'merc', 'damas', 'cobalt' ] - shu kabi yangi massiv qaytaradi. 
//Bu yerda eski massivni qiymatini o'zgartirishimiz mumkin boladi

const carsToUpper = cars.map((item) => item.toLocaleUpperCase())
console.log(carsToUpper);
// [ 'BMW', 'MERC', 'DAMAS', 'COBALT' ]

// FILTER - Bu xam yangi filterlangan massiv qaytaradi 
// yuqoridagi carsTO - massivini birortasini uzunligi 5 dan kichiklarini filterlab koramiz

const carFilter = carsToUpper.filter((item => item.length < 5))
console.log(carFilter);
// [ 'BMW', 'MERC' ]

// SOME/EVERY - method bu boolean qiymat qaytaradi

//some massivdagi qandaydir vazifa bajarilgan bolsa boolean qiymat qaytaradi

const varSome = [1, 'Mening ismim', false, '2022-11-01']
const usingSome = varSome.some((item) => typeof item == 'number') // buyerda nima qaytarilishi koramiz
console.log(usingSome); // true - qiymat qaytaradi chunki item da biz bergan tipda ma'lumot bor
// EVERY da esa xar birining qiymati biz bergan shart ni bajarish kerak

let usingEvery = varSome.every((item) => typeof item == 'number')
console.log(usingEvery); //false - chunki bizni massivimizdagi xar biy qiymat number emas
// endi shuni yuqoridagi carsTo - massivimiz bilan sinab koramiz bu ning ichidagi xar bir qiymat string
usingEvery = carsToLower.every((item) => typeof item == 'string')
console.log(usingEvery); // true - bizni massivimizdagi barcha elementlar string tipida ekanligi uchun uning qiymati true

// REDUCE  - massivdan umumiy qandaydir bir qiymatni qaytaradi yani bitta qiymatga keltirib beradi
// bu ikkita parametr qabul qiladi dastlabki (pervious) va xozirgi (curent) va 
// bundan tashqari biz boshlang'ich qiymatni korsatib qoyishimiz ham mumkin default bu 0 ga teng boladi

const varReduce = [1, 2, 3, 5, 7, 1, 5, 8]
let usingReduce = varReduce.reduce((sum, current) => sum + current)
    // bu yerda bizni reduce dastlab pervious value ga bu yerda sum = 0 deb qabul qiladi currentga esa 1 ni oladi current  = 1
    // ikkinchi aylanishda esa sum=1 current = 2 
    // uchunchi siklda sum = 3 current = 5 boladi ...
console.log(usingReduce); // summasi 32 degan qiymat qaytaryapti
usingReduce = varReduce.reduce((sum, current) => sum + current, 10)
console.log(usingReduce); // bu esa 42 degan qiymat qaytaradi chunki boshlang'ich qiymat 10 ni olgan

usingReduce = varReduce.reduce((perv, current) => perv * current)
console.log(usingReduce); // bu yerda esa massivdagi sonlar massiv ichidagi sonlar kopaytmasini xisoblab bermoqda 
// usingReduce = 8400

const varStringReduce = ['aa', 'bb', 'cc', 1, 2, 3]
usingReduce = varStringReduce.reduce((sum, current) => sum + current)
console.log(usingReduce); // aabbcc123  - degan javob ni olamiz chunki number + string = string
//yoki shuni oddiy text sifat chiqarib koramiz
usingReduce = varStringReduce.reduce((sum, current) => `${sum} ${current}`)
console.log(usingReduce); //aa bb cc 1 2 3  - interpalatsiya ishlatganimiz uchun o'rtadagi space ham chiqariladi