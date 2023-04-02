'use strict'
document.addEventListener('DOMContentLoaded', () => {


    let promoAdv = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        seriesList = document.querySelector('.promo__interactive-list'),
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

        let newSeries = inputVal.value
        const favourite = checkbox.checked

        // console.log("newSeries = ", newSeries);
        // console.log("accept = ", accept);
        //  sortArr(seriesDB.series);



        if (newSeries) {
            if (newSeries.length > 18) {
                newSeries = `${newSeries.substring(0, 18)}...`
            }
            if (favourite) {
                console.log('Sevimli serial qo’shilidi')
            }

            seriesDB.series.push(newSeries)
            console.log(seriesDB);

            sortArr(seriesDB.series);
            addListSeries(seriesDB.series, seriesList)
        }
        event.target.reset()

    })

    check[1].addEventListener('click', () => {
        if (check[1].checked == false) {
            btn.style.backgroundColor = 'red'
        } else {
            btn.style.backgroundColor = 'green'
        }
    })

    function addListSeries(series, parent) {
        parent.innerHTML = ''
        sortArr(series)

        series.forEach((item, idx) => {
            parent.innerHTML += `
            <li class="promo__interactive-item"> ${idx + 1} ${item}
            <div class="delete"></div>
            </li>
            `
        })

        document.querySelectorAll('.delete').forEach((trash, idx) => {
            trash.addEventListener('click', () => {
                trash.parentElement.remove()
                seriesDB.series.splice(idx, 1)
                addListSeries(seriesDB.series, seriesList)
            })
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
    let sortArr = (arr) => {
        arr.sort()
    }
    sortArr(seriesDB.series);
    deleteAd(promoAdv)
    btncheck()
    addListSeries(seriesDB.series, seriesList)


})