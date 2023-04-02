"use strict"

const thief = {
    jacket: "black",
    height: 197,
    hair: {
        color: "gray",
        style: "curley"
    },

    howOut: function() {
        console.log("Fastly, via doors")
    }
};
thief.howOut();
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


// objectdagi elementlar sonini chiqaramiz

// a)
let count = 0;
for (let key in thief) {
    count++;
}
console.log(count)

// b)
console.log(Object.keys(thief).length)

//Destruptizatsiya
const { color, style } = thief.hair
console.log(color, style)
    //odatiy xolda quydagi korinishda olmaiz destruptizatsiya da esa yuqoridagidek bu yerda {bu yerdagi o'zgaruvchilar object ichidagi bilan birxil boladi}
let hairColor = thief.hair.color,
    hairStyle = thief.style

console.log(hairColor, style)