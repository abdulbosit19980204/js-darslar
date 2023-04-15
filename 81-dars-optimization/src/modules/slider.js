function slider() {
    class SliderCard {
        constructor(src, alt, desc, parent, ...classes) {
            this.src = src
            this.alt = alt
            this.desc = desc
            this.parent = document.querySelector(parent)
            this.classes = classes
        }
        render() {
            const element = document.createElement('div')
            if (this.classes.length === 0) {
                this.element = 'offer__slide'
                element.classList.add(this.element)
            } else {
                this.classes.forEach((classname) => { element.classList.add(classname) })
            }

            element.innerHTML = `
            <img src=${this.src} alt =${this.alt} />
             <div class="tabcontent__descr">${this.desc}</div>
    
            `
                // console.log(element);
            this.parent.append(element)
        }
    }

    axios.get('http://localhost:3000/slider').then((data) => {
        data.data.forEach((obj) => {
            new SliderCard(
                obj.src,
                obj.alt,
                obj.desc,
                ".offer__slider-inner"
            ).render()
            console.log("data.data => ", data.data);
        })




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
                slider = document.querySelector('.offer__slider'),

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


            function deleteNotDigits(str) {
                // return parseInt(str.replace(/[^\d.]/g, ''))
                return +(str.replace(/[^\d.]/g, ''))
            }

            nextBtn.addEventListener('click', () => {
                // [^\d.] - []=> bu toplamni bildiradi shuni ichidagi barcha elementlar  ^ bu esa inkor qiladi bolmagan degan manoda \d raqam yoki "." shulardan tashqari barchasini
                if (offset == deleteNotDigits(width) * (slides.length - 1)) {
                    offset = 0

                } else {
                    offset += deleteNotDigits(width)

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
                    offset = deleteNotDigits(width) * (slides.length - 1)
                } else {
                    offset -= deleteNotDigits(width)
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
                    offset = deleteNotDigits(width) * (slideTo - 1)

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




    })
}

export default slider