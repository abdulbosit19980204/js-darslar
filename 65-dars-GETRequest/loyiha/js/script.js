window.addEventListener('DOMContentLoaded', () => {

    // previev js slider start

    let tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabText = document.querySelectorAll('.tabcontent__descr'),
        loader = document.querySelector('.loader')

    // Loader

    setTimeout(() => {
        // loader.classList.remove('loader')
        loader.style.opacity = '0'
        setTimeout(() => {
            // loader.style.display = 'none'
            loader.classList.remove('loader')
        }, 500);
    }, 1000);

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

    // offer slider start
    let nextBtn = document.querySelector('.offer__slider-next'),
        prevBtn = document.querySelector('.offer__slider-prev'),
        showCurent = document.querySelector('#current'),
        showTotal = document.querySelector('#total'),
        slidesParent = document.querySelector('.offer__slider-wrapper'),
        slides = document.querySelectorAll('.offer__slide'),
        i = Number(showCurent.textContent) - 1

    // bu yerda slide lar sonini topib olamiz
    // // console.log(slides.length);
    maxSlide = slides.length
    showTotal.textContent = "0" + maxSlide

    // next buttondi ishga tushuramiz
    nextBtn.addEventListener('click', () => {
        // agar i yimiz sliderlar sonidan ortiq bolmasa i di bir ga oshiradi
        if (i < maxSlide) {
            ++i
            showCurent.textContent = "0" + i
                // // console.log(showCurent);
                // // console.log(i)
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
                    // console.log(showCurent);
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


    //Timer 

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


    //Modul 

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



    //Class 
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

    async function getRecource(url) {
        const res = await fetch(url)
        return await res.json()
    }

    getRecource('http://localhost:3000/menu').then((data) => {
            // console.log("getREcource  => ", data);
            data.forEach(obj => {
                new MenuCard(obj.img, obj.altimg, obj.title, obj.descr, obj.price, ".menu .container").render()
            })
        })
        /*
            new MenuCard(
                'img/tabs/1.png',
                'vegy',
                'Plan "Usual"',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
                2,
                ".menu .container",
                // "menu__item"

            ).render()
            new MenuCard(
                'img/tabs/2.jpg',
                'elite',
                'Plan “Premium”',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
                3,
                ".menu .container",
                "menu__item"
            ).render()
            new MenuCard(
                'img/tabs/3.jpg',
                'post',
                'Plan "VIP"',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
                5,
                ".menu .container",
                // "menu__item"
            ).render()
        */
        // fetch('http://localhost:3000/menu').then(data => data.json()).then(res => console.log(res))

    /*

        //Rest operatori

        //rest operati qiymatlarni bitta massivga yig'ib beradi 
        // rest operatori ...rest_name shaklida beriladi
        function logger(a, b, ...rest) {
            // console.log(a, b, rest);
        }

        logger(1, 2, 5, 7, 8, 9, 11, 55)
    */

    function calc(number, def = 3) {
        //o'zgaruvchiga default qiymat berish eski xolatda agar funksiyanni chaqirilgan paytda ikkinchi qiymat berilmasa default qiymatni oladi
        //def=def || 10 bu yerda agar def kiritilgan bolsa def ni oladi aks xolda 10 qiymatini oladi
        //lekin xozirgi kunda bu ancha sodalashgan parametrdagi def = 10 shu korinishda berish kifoya qiladi

        // console.log(number * def);
    }
    calc(5)

    //Form 

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


})