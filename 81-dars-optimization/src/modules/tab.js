function tabs() {
    // previev js slider start

    let tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabText = document.querySelectorAll('.tabcontent__descr')




    // TabDagi textni kesib beradi ortiqchasini chiqarib tashlaydi
    tabText.forEach((item) => {
        if (item.textContent.length > 843) {
            item.textContent = `${item.textContent.substring(0,843)}...`
        }
    })

    //aktiv kontentni korsatadi
    function showContent(i = 3) {
        // tabsContent[i].style.display = 'block'
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }

    //aktiv bo'lmagan kontentlarni yashirish
    function hideContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide', 'fade')
            item.classList.remove('show')
                // item.style.display = 'none'
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    hideContent()
    showContent()

    tabsParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, idx) => {
                if (target == item) {
                    // // console.log(idx);
                    hideContent()
                    showContent(idx)
                }
            })
        }
    })


    // previev js tamam

}

export default tabs