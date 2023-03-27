window.addEventListener('DOMContentLoaded', () => {

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
                    console.log(idx);
                    hideContent()
                    showContent(idx)
                }
            })
        }
    })


    // previev js tamam

    // offer slider start
    let nextBtn = document.querySelector('.offer__slider-next'),
        prevBtn = document.querySelector('.offer__slider-prev'),
        showCurent = document.querySelector('#current'),
        showTotal = document.querySelector('#total'),
        slidesParent = document.querySelector('.offer__slider-wrapper'),
        slides = document.querySelectorAll('.offer__slide'),
        i = Number(showCurent.textContent) - 1

    // bu yerda slide lar sonini topib olamiz
    console.log(slides.length);
    maxSlide = slides.length
    showTotal.textContent = "0" + maxSlide

    // next buttondi ishga tushuramiz
    nextBtn.addEventListener('click', () => {
        // agar i yimiz sliderlar sonidan ortiq bolmasa i di bir ga oshiradi
        if (i < maxSlide) {
            ++i
            showCurent.textContent = "0" + i
            console.log(showCurent);
            console.log(i)
            hideOfferSlider()
            showOfferSlider(i - 1)
        } else {
            i = 0
        }
    })


    // prev buttonini ishga tushuramiz
    prevBtn.addEventListener('click', () => {
            // i yimiz ning qiymati 0 dan katta bolsa 
            if (i > 0) {
                --i
                showCurent.textContent = "0" + (i + 1)
                console.log(showCurent);
                hideOfferSlider()
                showOfferSlider(i)
            } else {
                // agar shart bajarilmay qolsa i di qiymatini yana qaytada maxsimal qiymatga qaytaradi
                i = Number(showTotal.textContent)
            }
        })
        // show funksiyamiz i boyicha slidelar ni korsatib beradi va bundan hide classini ochirib yuboradi Js ES6 dan boshlab quydagicha default qiymat berish mumkin. i=3
    function showOfferSlider(i = 3) {
        slides[i].classList.add('show', 'fade')
        slides[i].classList.remove('hide')

    }
    // hide esa yuqoridagi funkisyamizni teskaris yani i dan qolgan barcha elemtlarga hide classini qoshib beradi 
    function hideOfferSlider() {
        slides.forEach(item => {
            item.classList.add('hide', 'fade')
            item.classList.remove('show')
                // item.style.display = 'none'
        })
    }

    // dastlab ki holatda barchasini o'chirib faqat default berilgan qiymatni chaqirib qoyamiz bizni default i = 3 funksiyada korsatib otganmiz
    hideOfferSlider()
    showOfferSlider()





    // offer slider tamam

})