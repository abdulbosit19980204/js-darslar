'use strict'
let box = document.querySelector('#box')
console.log(box);
console.dir(box);
// dynamic style qoshamiz
box.style.backgroundColor = '#FFD700'
box.style.height = '100px'
box.style.width = '200px'

//o'zidan massiv qiymat qaytaradiganlarga yuqoridak qiymat berilmaydi bunining 
// uchun massivga elementini olib olish kerak

let button = document.querySelectorAll('button')
console.log(button);

// button.style.width = '150px' - bunday qiyma berish xato sanaladi
//button[0].style.width = '150px'
/*
for (let i = 0; i < button.length; i++) {
    button[i].style.width = (50 + (i * 20)) + 'px'
    console.log(button[i].style.width);
}
*/
button.forEach((item, key) => {
    button[key].style.width = (100 * key) + 'px'
    item.style.color = '#a' + (key * 3) + '0f';
    button[key].style.backgroundColor = '#a' + (key * 3) + 'f';
    console.log(button[key].style.width);
    console.log(button[key].style.color);
})

//documentga yangi elementni dynamic qoshish qoshish

let btn = document.createElement('button')
let text = document.createTextNode('Login')
let input = document.createElement('input')
    // yaratgan elementlarimizni body ga qoshib olamiz shundan keyin korinadi
document.body.append(btn, text, input)
    // yaratgan elementimizga style beramiz cllsslist yordamida class qoshamiz 
    // va shunga style beramiz
let myCircle = document.createElement('div')
myCircle.classList.add('circle')
document.body.append(myCircle)
    //buni boshqa div ichiga joylaymiz
let circleWrapper = document.querySelector('.circle__wrapper')
    // circleWrapper.append(myCircle)
    //buni avalgi circle dan oldin ham qoshish mumkin
    //circleWrapper.before(myCircle) // bu yerda faqat circleWrapper ichigamas undan oldin qoshilyapti
    // endi shuni shu div ichida birinchi qoshish uchun esa
let circlebtn = document.querySelectorAll('.circle')
circlebtn[2].before(myCircle)
    //keyin qoshish uchuhn esa after dan foydalanamiz
    //circleWrapper.after(myCircle)
    // tepada yaratgan textmizni shu circle ichiga joylaymiz
myCircle.append(text)
    // shu circle elementlarimizdan birini remove qilamiz
    // B yani ikkinchida turishi kerak bolgan element o'chib ketdi
circlebtn[1].remove()
    //yoki bizda tayyor elementni yangi elementga replace qilishimiz ham mumkin
    //D ni o'zimiz yasagan btn ga almashtiramiz
circlebtn[3].replaceWith(myCircle)
    // ichiga innerHTML bilan element qoshish
    // yuraklar ichiga elemnt qoshamiz
let hearts = document.querySelectorAll('.heart');
console.log(hearts[1]);
hearts[1].innerHTML = 'A';
hearts[1].style.color = 'white'
hearts[1].style.backgroundColor = 'blue'
hearts[1].style.fontSize = '152px';

myCircle.innerHTML = '<pre>Login</pre>';
circleWrapper.insertAdjacentHTML('afterbegin', '<pre class="circle">New</pre>')