'use strict'

let slider = document.querySelector('#slider'),
    // scroll = document.documentElement.clientHeight
    scroll = document.querySelector('.text'),
    sliderCounter = document.querySelector('h2')

slider.max = scroll.scrollHeight

scroll.addEventListener('scroll', () => {
    // slider.max = scroll.sliderHeight
    console.log("max = ", slider.max)
    slider.value = scroll.scrollTop
    console.log("slider = ", slider.value);
    sliderCounter.textContent = (" *** " + String(slider.value) + " *** ")
})

slider.addEventListener('input', () => {
    console.log("max = ", slider.max)
    scroll.scrollTop = slider.value
    console.log("slider = ", slider.value);
    sliderCounter.textContent = (" *** " + String(slider.value) + " *** ")

})