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
        slider = document.querySelector('.offer__slider')

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

    const indicators = document.createElement('ol')
    const dots = []
    indicators.classList.add('corusel-indicators')
    slider.append(indicators)


    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to', i + 1)
        dot.classList.add('dot-corusel')
        if (i == 0) { dot.style.opacity = 1 }
        indicators.append(dot)
        dots.push(dot)

    }

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

        dots.forEach((dot) => { dot.style.opacity = 0.5 })
        dots[slideIndex - 1].style.opacity = 1
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

        dots.forEach((dot) => { dot.style.opacity = 0.5 })
        dots[slideIndex - 1].style.opacity = 1
    })

    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to')
            slideIndex = slideTo
            offset = +width.slice(0, width.length - 2) * (slideTo - 1)
            slidesField.style.transform = `translateX(-${offset}px)`
            dots.forEach((dot) => { dot.style.opacity = 0.5 })
            dots[slideIndex - 1].style.opacity = 1
            if (slides.length < 10) {
                showCurent.textContent = `0${slideIndex}`
            } else {
                showCurent.textContent = slideIndex
            }
        })
    })

}, 500);
/**########################## Corusel ################################# */
/**########################## TAMAM ################################## */

/******************************************************************************************** */
/******************************************************************************************** */