/**########################## START ################################# */
/**######################### Corusel ################################# */
setTimeout(() => {


    let nextBtn = document.querySelector('.offer__slider-next'),
        prevBtn = document.querySelector('.offer__slider-prev'),
        showCurent = document.querySelector('#current'),
        showTotal = document.querySelector('#total'),
        slides = document.querySelectorAll('.offer__slide'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),

        width = window.getComputedStyle(slidesWrapper).width,

        slideIndex = 1,
        offset = 0

    if (slides.length < 10) {
        showTotal.textContent = `0${slides.length}`
        showCurent.textContent = `0${slideIndex}`
    } else {
        showTotal.textContent = slides.length
        showCurent.textContent = slideIndex
    }


    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = '.5s ease all'
    slidesWrapper.style.overflow = 'hidden'
    slides.forEach((slide) => {
        slide.style.width = width
    })

    nextBtn.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0
        } else {
            offset += +width.slice(0, width.length - 2)
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == slides.length) {
            slideIndex = 1
        } else {
            slideIndex++
        }

        if (slides.length < 10) {
            showCurent.textContent = `0${slideIndex}`
        } else {
            showCurent.textContent = slideIndex
        }
    })
    prevBtn.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1)
        } else {
            offset -= +width.slice(0, width.length - 2)
        }
        slidesField.style.transform = `translateX(-${offset}px)`
        if (slideIndex == 1) {
            slideIndex = slides.length
        } else {
            slideIndex--
        }

        if (slides.length < 10) {
            showCurent.textContent = `0${slideIndex}`
        } else {
            showCurent.textContent = slideIndex
        }
    })

}, 1000);
/**########################## Corusel ################################# */
/**########################## TAMAM ################################## */

/******************************************************************************************** */
/******************************************************************************************** */