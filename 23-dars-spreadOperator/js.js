"use strict"

function logger(x, y, z) {
    console.log(x + y + z)
}

logger(1, 2, 3)

let orders = [1, 2, 5]
    //biz da orgers degan massivimiz buni ichidagi ma'lumot larni yig'indisini xisoblash kerak
    //buning uchun quydagi cha bersat xato qiymat beradi
logger(orders)
    /*
    1,2,5undefinedundefined
    */

/*
 Buni to'g'ri xisoblashimiz uchun esa bizga spread operatori kerak boladi spread operatori
...x shu korinishda beriladi
*/

logger(...orders)
    // bu yerdan esa 8 degan natija chiqariladi

//Array larda spread operatirini ishlatish 
let userlist = [
    "ism:", "abdulbosit",
    "familya:", "Tuychiev",
    "tug_yil:", 1998
]
let newuserlist = [...userlist]
console.log(newuserlist)

// objectlarda spread operatori
let orderlsit = {
    order_id: 1,
    order_item: "car",
    customer_id: 25,
    order_date: "16-02-2023"
}

newOrder = {...orderlsit }
console.log(newOrder);