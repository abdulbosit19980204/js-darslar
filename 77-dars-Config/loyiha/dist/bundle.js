/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/class.js":
/*!******************************!*\
  !*** ./src/modules/class.js ***!
  \******************************/
/***/ ((module) => {

function clas() {
    /**########################## START ################################# */
    /**########################## Class ################################## */

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src
            this.alt = alt
            this.title = title
            this.descr = descr
            this.price = price
            this.classes = classes
            this.parent = document.querySelector(parentSelector)
            this.tarnsfer = 11000
            this.changeToUZS()
        }
        changeToUZS() {
            this.price = this.price * this.tarnsfer
        }
        render() {
            const element = document.createElement('div')
                // console.log(this.classes);
            if (this.classes.length === 0) {

                this.element = 'menu__item'
                element.classList.add(this.element)

            } else {
                this.classes.forEach((classname) => { element.classList.add(classname) })
            }
            element.innerHTML = ` 
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
           
            <div class="menu__item-descr"> ${this.descr} </div>
            <div class="menu__item-divider"></div>
           
            <div class="menu__item-price">
                <div class="menu__item-cost">Price:</div>
                <div class="menu__item-total"><span>${this.price}</span> UZS/month</div>
            </div>`

            this.parent.append(element)
        }

    }
    //axios - bilan get qilamiz bu koplab ma'lumotlar qaytaradi faqat gina data nilamas undan tashqari config, headers ... 
    //datani o'zini olishimiz uchun responsni data siga murojat qilamiz biz buyerda response yimizni data deb nomlaganmiz shuning 
    //uchun data birinchisi umumiy response ikkinchi data responseni data si data.data

    /**########################## START ################################# */
    /**######################## AXIOS GET ############################### */

    axios.get('http://localhost:3000/menu').then((data) => {
        data.data.forEach(obj => {
            new MenuCard(
                obj.img,
                obj.altimg,
                obj.title,
                obj.descr,
                obj.price,
                ".menu .container"
            ).render()
        })
    })




}

module.exports = clas

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((module) => {

function form() {
    /**########################## START ################################# */
    /**######################## POST FORM ############################### */

    const forms = document.querySelectorAll('form')

    forms.forEach((form) => {
        bindPostData(form)
    })
    console.log(forms);
    const msg = {
        loadingMsg: "Loading",
        loadingSrc: 'img/loading.svg',
        success: "Thank you for your message! We will call as soon as!",
        failure: "Something went wrong",
    }

    async function postData(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })

        if (!res.Ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const statusMessage = document.createElement('div')
            const statusImg = document.createElement('img')
            statusImg.src = msg.loadingSrc
            statusMessage.style.cssText = `
            display: flex;
            color: yellow;
            width: 50%;
            `
            statusImg.style.cssText = ` 
            display: block;
            margin: 0 autoz;
            width: 50%;
            `
            statusMessage.textContent = msg.loadingMsg

            form.append(statusMessage)
            statusMessage.append(statusImg)

            const formData = new FormData(form)


            // Bu yerda biz yuboryatgan ma'lumotimizni JSON formatda yuborami

            const json = JSON.stringify(Object.fromEntries(formData.entries()))
                // object.entries - obyektni mayda bo'akli massivlarga bolib qaytaradi
            const valObenter = { x: 10, y: 20 }
            console.log(Object.entries(valObenter)); //[ [ 'x', 10 ], [ 'y', 20 ] ]


            // buni endi json serverga jonatamiz bu yerdan server.php ni olib o'rniga json server manzilini yozamiz

            postData('http://localhost:3000/request', json)
                .then((data) => {
                    console.log(data)
                    showThanksModal(msg.success)

                })
                .catch(() => {
                    showThanksModal(msg.failure)

                })
                .finally(() => {
                    form.reset()
                    statusMessage.remove()

                })

        })
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog')
        prevModalDialog.classList.add('hide')
        openModal()

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML = `
        <div class="modal__content">
          <div data-close class="modal__close">&times;</div>
            <div class="modal__title">
                ${message}
            </div>
        </div>
        `

        document.querySelector('.modal').append(thanksModal)
        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('show')
            prevModalDialog.classList.remove('hide')
            closeModal()
        }, 4000);
    }

    /**########################## TAMAM ################################# */
    /**######################## POST FORM ############################### */
}

module.exports = form

/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((module) => {

function loader() {
    // Loader
    let loader = document.querySelector('.loader')
    setTimeout(() => {
        // loader.classList.remove('loader')
        loader.style.opacity = '0'
        setTimeout(() => {
            // loader.style.display = 'none'
            loader.classList.remove('loader')
        }, 500);
    }, 1000);
}

module.exports = loader

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((module) => {

function modal() {


    /**########################## START ################################# */
    /**########################## MODUL ################################## */

    const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal')
        // modalCloseBtn = document.querySelector('[data-close]')

    modalTrigger.addEventListener('click', openModal)

    // modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target == modal || e.target.getAttribute('data-close') == '') {
            closeModal()
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    })

    const modalTimerId = setTimeout(openModal, 3000)

    function openModal() {
        // modal.classList.toggle('show')

        modal.classList.add('show')
        modal.classList.remove('hide')

        document.body.style.overflow = 'hidden'
        clearInterval(modalTimerId)
    }

    function closeModal() {
        modal.classList.add('hide')
        modal.classList.remove('show')
            // modal.classList.toggle('hide')
            // modal.classList.toggle('show')
        document.body.style.overflow = ''
    }

    /**########################## TAMAM ################################# */
    /**########################## MODUL ################################## */
}

module.exports = modal

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((module) => {

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

module.exports = slider

/***/ }),

/***/ "./src/modules/tab.js":
/*!****************************!*\
  !*** ./src/modules/tab.js ***!
  \****************************/
/***/ ((module) => {

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

module.exports = tabs

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((module) => {

function timer() {

    /**########################## START ################################# */
    /**########################## TIMER ################################## */

    const deadline = '2023-12-29 07:56:00'



    function getTimeRemaining(endtime) {
        const timer = Date.parse(endtime) - Date.parse(new Date())
        days = Math.floor(timer / (1000 * 60 * 60 * 24))
        hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
        minutes = Math.floor((timer / 1000 / 60) % 60)
        seconds = Math.floor((timer / 1000) % 60)
            // console.log(seconds);
        return {
            timer,
            days,
            hours,
            minutes,
            seconds
        }


    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }


    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000)
        updateClock()

        function updateClock() {
            const t = getTimeRemaining(endtime)
            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.timer <= 0) {
                clearInterval(timeInterval)
                const endingMessage = document.querySelector('.timer')
                endingMessage.textContent = "Afsus Chegirma tugadi!"
                endingMessage.style.fontSize = '40px'
                endingMessage.style.color = 'red'
            }
        }
    }

    setClock('.timer', deadline)

    /**########################## TAMAM ################################# */
    /**########################## TIMER ################################## */

}

module.exports = timer

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', () => {
    const clas = __webpack_require__(/*! ../modules/class */ "./src/modules/class.js")
    const form = __webpack_require__(/*! ../modules/form */ "./src/modules/form.js")
    const loader = __webpack_require__(/*! ../modules/loader */ "./src/modules/loader.js")
    const modal = __webpack_require__(/*! ../modules/modal */ "./src/modules/modal.js")
    const slider = __webpack_require__(/*! ../modules/slider */ "./src/modules/slider.js")
    const tab = __webpack_require__(/*! ../modules/tab */ "./src/modules/tab.js")
    const timer = __webpack_require__(/*! ../modules/timer */ "./src/modules/timer.js")


    clas()
    form()
    loader()
    modal()
    slider()
    tab()
    timer()
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map