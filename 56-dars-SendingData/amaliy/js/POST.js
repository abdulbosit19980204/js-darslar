'use strict'

//FORM POST

const forms = document.querySelectorAll('form')

forms.forEach((form) => {
    postData(form)
})

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault() //Browserni defaul holatini o'chiradi
            // console.log(form);
        const responseMsg = {
            loading: "Loading...",
            success: "Your dates sent successfuly",
            failure: "Something went wrong!"
        }

        const request = new XMLHttpRequest()
        request.open('POST', 'server.php')

        const responsMsgDisplay = document.createElement('div')
        form.append(responsMsgDisplay)
        responsMsgDisplay.textContent = responseMsg.loading
        setTimeout(() => {
            responsMsgDisplay.remove()
        }, 2000);



        request.setRequestHeader('Content-Type', 'application/json')
            // request.setRequestHeader('Content-Type', 'multipart/form-data')
        const formData = new FormData(form)
        const obj = {}
        formData.forEach((val, key) => {
            obj[key] = val
        })

        const json = JSON.stringify(obj)
        request.send(json)
            // request.send(formData)
        request.addEventListener('load', () => {
            if (request.status === 200) {
                responsMsgDisplay.style.color = 'green'
                responsMsgDisplay.textContent = responseMsg.success
                form.reset()
                console.log("ma'lumotlar muvofaqiyatli yuborildi => ", request.response);
                setTimeout(() => {
                    responsMsgDisplay.remove()
                }, 5000);

            } else {
                responsMsgDisplay.style.color = 'red'
                console.log("There an error occuried => ", request);
                form.reset()
                responsMsgDisplay.textContent = responseMsg.failure
                setTimeout(() => {
                    responsMsgDisplay.remove()
                }, 5000);
            }
        })

    })
}