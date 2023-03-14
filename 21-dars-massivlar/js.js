let a = [5, 7, 9, 11, 8, 7, 111, "a", "b", "w"]
console.log(a);
console.log(a[1])
for (i = 7; i < a.length; i++) {
    console.log(a[i])
}

// pop - massiv oxirgi elementini o'chiradi
a.pop()
console.log("<pop> ", a, " </pop>")

//push esa oxiriga elemnt qoshadi pushdi ichida kiritilishi kerak bolgan qiymat yoziladi
a.push("Bu yangi kiritilgan qiymat")
console.log("<push> ", a, "</push>")

//shift massivni boshida bitta element tashlab ketadi - lekin deyarlik ishlatilmaydi
a.shift()
console.log("<shift>", a, "</shift>")

// unshift boshiga element qoshadi
a.unshift("")
console.log("<unshift>", a, "</unshift>")