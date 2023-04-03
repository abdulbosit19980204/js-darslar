'use strict'

const isFriendCome = true

// Promise - Promise key word bilan e'lon qilinadi 
const meetingRequest = new Promise((resolve, reject) => {
    //buyerda promise da nima shart bajarilish kerakligini berib otyapmiz
    if (isFriendCome) {
        const msg = "Frend I'm there"
        resolve(msg)
    } else {
        const err = "I can't come there"
        reject(err)
    }
})

meetingRequest
    .then((msg) => console.log(msg)) // true qaytarilsa .then bilan javob qaytariladi
    .catch((err) => console.log(err)) // false qaytarilsa .catch bilan ushlanadi
    .finally(() => { console.log("I am waiting for your responses"); }); // ikkala xolda ham bu finally bilan ishga tushuramiz



// so'rovlar ikki xil boladi sync async
// sync - bu birin ketin ishga tushuriladigan sorovlar birnchi sorov tamomlangandan song ikkinchisi ishga tushuriladi
// async - bu birnechta sorovlarga javob qaytarishi mumkin boladi

// Promise bolmasa qo'dimiz quydagicha chozilib ketadi
// Buni kamchiliklaridan eng kattasi esa biz natija qanchada qaytarilishini bilmaymiz
// I o'qish ham qiyinlashib ketadi
console.log('Request data...')
setTimeout(() => {
    console.log('Processing data...');
    const product = {
        name: 'car',
        color: 'black',
    }
    setTimeout(() => {
        product.status = 'order'
        console.log(product);
    }, 2000);
}, 2000);

// Endi yuqoridagi kodimizni Promise bilan korib chiqamiz
console.log('Request data...')
const req = new Promise(resolve => {
    setTimeout(() => {
        const product = {
            name: 'car',
            color: 'black'
        }
        console.log('Processing data...');
        resolve(product)
    }, 2000);
})

//Bu birinchi xolatdagi Promise
// req.then((data) => console.log(data)).finally(() => console.log('Fetching data end'))

//Promise ichiga yangi Promise yozishimiz mumkin
req.then((data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data.status = 'ordered'
                console.log('Get data...');
                // resolve(data)
                reject()
            }, 2000);
        })
    })
    .then(result => console.log(result))
    .catch(() => console.log('the requested information is not available'))
    .finally(() => console.log('Fetching end'))