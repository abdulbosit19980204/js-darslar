'use strict'

let btns = document.querySelectorAll('button'),
    iicon = document.querySelectorAll('i')
    /*
    1) classlist
    2) classlist.length
    3) classlist.item(index)  classlist.item(1)
    
    */

console.log(btns[0].classList)

/*
add new class for elements
classlist.add('class_name')
*/

btns[2].classList.add('active')
    /*
    remove classes from elements
    classlist.remove('class-name')
    */
btns[0].classList.remove('active', 'btn-class-list')

/*
toggle - if a class have on element after romeve else add
classlist.toggle('class-name')
*/
btns[0].classList.toggle('btn-class-list')
btns[2].classList.toggle('active')

/*
propertylar bilan ishlash 
contains - borligini tekshiradi agar xa bolsa true qaytaradi
*/
if (btns[0].classList.contains('active')) {
    console.log('done');
} else {
    btns[0].classList.toggle('active')
    console.log('active class added');
}

/*
xodisalar bilan ishlash
*/
console.log(iicon[0])
btns[0].addEventListener('click', () => {
        if (!btns[3].classList.contains('active')) {
            btns[3].classList.add('active')
            iicon[0].textContent = 'Deactive'
                // alert('Activated')

        } else {
            console.log('default yes');
            btns[3].classList.remove('active')
            iicon[0].textContent = 'Active'
                // alert('Deactivated')
        }
    })
    /*
    yuqorida yozgan komandamizni bitta toggle bilan qilish mumkin
    if shartni o'zi bajarib beradi lekin bu yerda ortiqcha shart bolmashi kerak boladi
    */