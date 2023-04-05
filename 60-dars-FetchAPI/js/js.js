'use strict'

// default fetch GET methodni oladi
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

// Endi uni POST qilamiz buning uchun fetchga methodqoshamiz
// Fetch ikkita parametr qabul qiladi input va init 
//input - url
// init esa taxminan method


fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ name: 'abdulbosit' }),
    })
    .then(response => response.json())
    .then(json => console.log(json))