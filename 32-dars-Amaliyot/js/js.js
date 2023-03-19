let promoAdv = document.querySelectorAll('.promo__adv img'),
    promoGenre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    promoInteractiveList = document.querySelector('.promo__interactive-list'),
    btn = document.querySelector('button'),
    check = document.querySelectorAll('input'),
    seriesDB = {
        series: [
            'Omar',
            'Songi qaxramon',
            'Binasa',
            'Magnificent Century',
            'The Great Seljuks: Guardians...',
        ],
    }
promoAdv.forEach((item) => {
    item.remove()
})

promoGenre.textContent = "Comedy"

promoBg.style.backgroundImage = 'url("img/1.jpg")'
promoInteractiveList.innerHTML = ""

seriesDB.series.forEach((item, idx) => {
    promoInteractiveList.innerHTML += `
    <li class="promo__interactive-item"> ${idx + 1} ${item}
    <div class="delete"></div>
    </li>
    `
})

btn.style.borderRadius = '8px'


console.log(check[1].checked);
if (check[1].checked == false) {
    btn.style.backgroundColor = 'red'
} else {
    btn.style.backgroundColor = 'green'
}