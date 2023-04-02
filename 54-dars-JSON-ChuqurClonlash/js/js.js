'use strict'

const car = {
    name: 'BMW',
    color: 'Black',
    extara: {
        isAirbag: false,
        ballon: 3,
    },
}

//chuqur klonlash
const clone = JSON.parse(JSON.stringify(car))
console.log(clone);

//objectdan => JSON ga  stringify
const objeToJSON = JSON.stringify(car)
console.log(objeToJSON);
// JSON dan => Object ga parse
const JSONToObj = JSON.parse(objeToJSON)
console.log(JSONToObj);