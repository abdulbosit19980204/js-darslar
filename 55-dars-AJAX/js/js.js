'use strict'

const uzs = document.querySelector('#uzs'),
    usd = document.querySelector('#usd'),
    changeType = document.querySelector('.form-check-input')

usd.addEventListener('input', (e) => {
    const request = new XMLHttpRequest()
    request.open('GET', 'json/curent.json')
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send()

    // 1- bizga bu status qaytaradi masalar 200-ok, 404-not-found, 500-server, 400-client error 
    // 2- Status text
    // 3-response
    // readyState 0 - unsent 1 -opened 2 -Headers_recieved 3-Loading 4-done

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response)
            uzs.value = +usd.value * data.current.uzs
            console.log("status 200 = ", uzs, usd)
            uzs.style.color = 'black'

        } else {
            uzs.value = 'Something went wrong'
            console.log("stauts error = ", uzs, usd)
            uzs.style.color = 'red'

        }
    })

})
changeType.addEventListener('input', () => {
    if (changeType.checked === true) {

        uzs.addEventListener('input', () => {
            const request = new XMLHttpRequest()
            request.open('GET', 'json/curent.json')
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
            request.send()

            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                    console.log(request.response);
                    const data = JSON.parse(request.response)
                    usd.value = +uzs.value / data.current.uzs
                    console.log("status 200 = ", uzs, usd)
                    usd.style.color = 'black'

                } else {
                    usd.value = 'Something went wrong'
                    console.log("stauts error = ", uzs, usd)
                    usd.style.color = 'red'

                }
            })

        })
    } else {
        usd.addEventListener('input', (e) => {
            const request = new XMLHttpRequest()
            request.open('GET', 'json/curent.json')
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
            request.send()

            // 1- bizga bu status qaytaradi masalar 200-ok, 404-not-found, 500-server, 400-client error 
            // 2- Status text
            // 3-response
            // readyState 0 - unsent 1 -opened 2 -Headers_recieved 3-Loading 4-done

            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                    console.log(request.response);
                    const data = JSON.parse(request.response)
                    uzs.value = +usd.value * data.current.uzs
                    console.log("status 200 = ", uzs, usd)
                    uzs.style.color = 'black'

                } else {
                    uzs.value = 'Something went wrong'
                    console.log("stauts error = ", uzs, usd)
                    uzs.style.color = 'red'

                }
            })

        })
    }
})