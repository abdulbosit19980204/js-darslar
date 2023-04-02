'use strict'

let slider = document.querySelector('#slider'),
    // scroll = document.documentElement.clientHeight
    scroll = document.querySelector('.text'),
    sliderCounter = document.querySelector('h2')

slider.max = scroll.scrollHeight
p.textContent = ""
scroll.addEventListener('scroll', () => {
    console.log("max = ", slider.max)
    slider.value = scroll.scrollTop
    console.log("slider scroll = ", slider.value);
    sliderCounter.textContent = String(slider.value)
    p.textContent = (p.textContent + " " + slider.value)
    console.log("p = ", p.textContent);
    slider.max = scroll.scrollHeight
})

slider.addEventListener('input', () => {
    // console.log("max = ", slider.max)
    scroll.scrollTop = slider.value
    console.log("slider range = ", slider.value);
    sliderCounter.textContent = String(slider.value)
    sliderCounter.textContent = String(slider.value)
    p.textContent = (p.textContent + " " + slider.value)
    console.log("p = ", p.textContent);
    slider.max = scroll.scrollHeight
})