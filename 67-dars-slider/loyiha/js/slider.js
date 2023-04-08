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
            ".offer__slider-wrapper"
        ).render()
        console.log("data.data => ", data.data);
    })
})

/**########################## START ################################# */
/**######################### SLIDER ################################# */

setTimeout(() => {

    let nextBtn = document.querySelector('.offer__slider-next'),
        prevBtn = document.querySelector('.offer__slider-prev'),
        showCurent = document.querySelector('#current'),
        showTotal = document.querySelector('#total'),
        slidesParent = document.querySelector('.offer__slider-wrapper'),
        slides = document.querySelectorAll('.offer__slide')


    let slideIndex = 1

    showSlides(slideIndex)

    if (slides.length < 10) {
        showTotal.textContent = `0${slides.length}`
    } else {
        showTotal.textContent = slides.length
    }

    function showSlides(idx) {
        if (idx > slides.length) {
            slideIndex = 1
        }
        if (idx < 1) {
            slideIndex = slides.length
        }
        slides.forEach(item => {
            let i = 0;
            i++
            //funksiya ishga tushishi bilan xamma slide lari displayini none qilamiz
            item.style.display = 'none'
                // slideIndex dagini esa block qilib olamiz
            slides[slideIndex - 1].style.display = 'block'


        })

        if (slideIndex < 10) {
            showCurent.textContent = `0${slideIndex}`
        } else {
            showCurent.textContent = slideIndex
        }
    }

    function plusSlides(idx) {
        showSlides(slideIndex += idx)
    }
    nextBtn.addEventListener('click', () => {
        plusSlides(1)
    })
    prevBtn.addEventListener('click', () => {
        plusSlides(-1)
    })
}, 1000);
/**########################## SLIDER ################################# */
/**########################## TAMAM ################################## */

/******************************************************************************************** */
/******************************************************************************************** */