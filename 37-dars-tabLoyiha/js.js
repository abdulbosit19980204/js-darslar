window.addEventListener('DOMContentLoaded', () => {
    let btns = document.querySelectorAll('button'),
        serviceBox = document.querySelectorAll('.service-box'),
        btnsBox = document.querySelector('.btns-box')

    function hideServiceBox() {
        serviceBox.forEach(item => {
            // item.style.display = 'none'
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        })
        btns.forEach((item) => {
            item.classList.remove('active')
        })
    }

    function showServiceBox(i = 0) {
        // serviceBox[i].style.display = 'block'
        serviceBox[i].classList.add('show', 'fade')
        serviceBox[i].classList.remove('hide')
        btns[i].classList.add('active')
    }

    hideServiceBox()
    showServiceBox(3)

    console.log(btnsBox);
    btnsBox.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('btn')) {

            btns.forEach((item, idx) => {
                if (target == item) {
                    console.log(idx);
                    hideServiceBox()
                    showServiceBox(idx)
                }
            })

        }
    })
})