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

export default clas