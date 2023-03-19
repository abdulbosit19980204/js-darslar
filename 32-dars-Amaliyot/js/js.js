'use strict'
document.addEventListener('DOMContentLoaded', () => {


    let promoAdv = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        promoInteractiveList = document.querySelector('.promo__interactive-list'),
        btn = document.querySelector('button'),
        check = document.querySelectorAll('input'),
        addForm = document.querySelector('form.add'),
        inputVal = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector("[type='checkbox']"),

        seriesDB = {
            series: [
                'Omar',
                'Songi qaxramon',
                'Binasa',
                'Magnificent Century',
                'The Great Seljuks: Guardians...',
            ],
        }


    addForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const newSeries = inputVal.value
        const accept = checkbox.checked
        console.log("newSeries = ", newSeries);
        console.log("accept = ", accept);
        if (newSeries != "") {
            seriesDB.series.push(newSeries)
            seriesDB.series.sort()
            console.log(seriesDB);

            addListSeries(seriesDB.series, promoInteractiveList)
        }


    })

    check[1].addEventListener('click', () => {
        if (check[1].checked == false) {
            btn.style.backgroundColor = 'red'
        } else {
            btn.style.backgroundColor = 'green'
        }
    })

    function addListSeries(series, parent) {
        parent.innerHTML = ""

        series.forEach((item, idx) => {
            parent.innerHTML += `
            <li class="promo__interactive-item"> ${idx + 1} ${item}
            <div class="delete"></div>
            </li>
            `
        })
    }

    function deleteAd(arr) {

        promoAdv.forEach((item) => {
            item.remove()
        })

        promoGenre.textContent = "Comedy"

        promoBg.style.backgroundImage = 'url("img/1.jpg")'
    }

    function btncheck() {
        btn.style.borderRadius = '8px'

        console.log(check[1].checked);
        if (check[1].checked == false) {
            btn.style.backgroundColor = 'red'
        } else {
            btn.style.backgroundColor = 'green'
        }
    }
    const sortArr = (arr) => {
        arr.sort()
    }

    deleteAd(promoAdv)
    btncheck()
})