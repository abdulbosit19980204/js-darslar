"use strict"

const thief = {
    jacket: "black",
    height: 197,
    hair: {
        color: "gray",
        style: "curley"
    },
};

console.log(thief)

//object timiz ni keylarini chiqaramiz Object method
console.log(Object.keys(thief))
console.log(Object.keys(thief).length)

// objectlarad itaratsiyalar bilan ishlash

for (let key in thief) {
    if (typeof thief[key] === "object") {
        for (let i in thief[key]) {
            console.log(`Property ${i} has value ${thief[key][i]} `);
        }
    } else {
        console.log(`Property ${key} has value ${thief[key]}`);
    }
}