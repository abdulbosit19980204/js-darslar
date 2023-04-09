window.addEventListener('DOMContentLoaded', () => {

    let email = document.querySelector('#emailInput'),
        password = document.querySelector('#passwordInput'),
        btnSave = document.querySelector('#btnSave'),
        btnRemove = document.querySelector('#btnRemove'),
        check = document.querySelector('#checkboxItem')
    formSubmit = document.querySelector('form')

    formSubmit.addEventListener('submit', (e) => {
        e.preventDefault()

        let i = 1
        i = i + 1;
        const user = {
            email: email.value,
            password: password.value,
        }

        localStorage.setItem(`user${i}`, JSON.stringify(user))
        e.target.reset()
        const alertdiv = document.createElement('div')

        alertdiv.innerHTML = `
        <div class="alert alert-info mt-3" role="alert">
        ${localStorage.getItem('email')} qo'shildi
        </div>
        `
        formSubmit.append(alertdiv)
        setTimeout(() => {
            alertdiv.remove()
        }, 2000);

        console.log(JSON.parse(localStorage.getItem('user')));
    })

    btnSave.addEventListener('click', () => {

        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)

        const alertdiv = document.createElement('div')

        alertdiv.innerHTML = `
        <div class="alert alert-info mt-3" role="alert">
        ${localStorage.getItem('email')} qo'shildi
        </div>
        `
        formSubmit.append(alertdiv)
        setTimeout(() => {
            alertdiv.remove()
        }, 2000);
    })

    btnRemove.addEventListener('click', () => {

        const alertdiv = document.createElement('div')

        alertdiv.innerHTML = `
        <div class="alert alert-warning mt-3" role="alert">
        ${localStorage.getItem('email')} o'chirildi
        </div>
        `
        formSubmit.append(alertdiv)


        setTimeout(() => {
            alertdiv.remove()
        }, 2000);


        localStorage.removeItem('email')
        localStorage.removeItem('password')


    })

    email.addEventListener('focus', () => {
        if (email.value == "") {
            email.value = localStorage.getItem('email')
            password.value = localStorage.getItem('password')
        }
    })

})