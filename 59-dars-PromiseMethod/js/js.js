'use strict'

const request = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    })
}

request(1000).then(() => console.log("Request 1000 ms is running"));
request(2000).then(() => console.log("Request 2000 ms is running"));
request(3000).then(() => console.log("Request 3000 ms is running"));
request(4000).then(() => console.log("done"));

// **all** - method hamma promiselar ishlab bolgandan keyin javob qaytaradi
// bu massiv [] korinishida qiymat qabul qiladi

Promise.all([request(100), request(500), request(1000), request(5000)]).then(() => console.log("promise all is done. It took about 5sec"))

// ikkinchi method esa **race** methodi qaysi bir promise birinchi ishga tushsa srazi javob qaytaradi

Promise.race([request(100), request(500), request(1000), request(5000)]).then(() => console.log("promise all is done. It took about 100ms. This is run firstly"))