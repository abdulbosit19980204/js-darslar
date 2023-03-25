'use strict'

let wrapper = document.querySelector('.mother-div'),
    iicon = document.querySelectorAll('i'),
    btns = document.querySelectorAll('button')


wrapper.addEventListener('click', (event) => {
    /*
        if (event.target && event.target.tagName == 'BUTTON') {
            console.log('btn click deactive')
            iicon[0].textContent = 'Deactive';

        } else {
            console.log('btn click active')
            iicon[0].textContent = 'Active';
        }
    */
    // 2)
    if (event.target && event.target.classList.contains('active')) {
        console.log('btn click deactive')
            // event.target.classlist.remove('active')
            // iicon[0].textContent = 'Deactive';

    } else {
        console.log('btn click active')
            // event.target.classlist.add('active')
            // iicon[0].textContent = 'Active';
    }

})

// btns.forEach(item => {
//     item.addEventListener('click', () => {
//         console.log('clicked');
//     })
// })

let btn = document.createElement('button')
btn.classList.add('active')
btn.classList.add('btn-class-list')
btn.textContent = 'yangi'
wrapper.append(btn)