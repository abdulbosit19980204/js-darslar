import { openModal, closeModal } from "./modal"

function form(modalTimerId) {
    /**########################## START ################################# */
    /**######################## POST FORM ############################### */

    const forms = document.querySelectorAll('form')

    forms.forEach((form) => {
        bindPostData(form)
    })
    console.log(forms);
    const msg = {
        loadingMsg: "Loading",
        loadingSrc: 'img/loading.svg',
        success: "Thank you for your message! We will call as soon as!",
        failure: "Something went wrong",
    }

    async function postData(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })

        if (!res.Ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const statusMessage = document.createElement('div')
            const statusImg = document.createElement('img')
            statusImg.src = msg.loadingSrc
            statusMessage.style.cssText = `
            display: flex;
            color: yellow;
            width: 50%;
            `
            statusImg.style.cssText = ` 
            display: block;
            margin: 0 autoz;
            width: 50%;
            `
            statusMessage.textContent = msg.loadingMsg

            form.append(statusMessage)
            statusMessage.append(statusImg)

            const formData = new FormData(form)


            // Bu yerda biz yuboryatgan ma'lumotimizni JSON formatda yuborami

            const json = JSON.stringify(Object.fromEntries(formData.entries()))
                // object.entries - obyektni mayda bo'akli massivlarga bolib qaytaradi
            const valObenter = { x: 10, y: 20 }
            console.log(Object.entries(valObenter)); //[ [ 'x', 10 ], [ 'y', 20 ] ]


            // buni endi json serverga jonatamiz bu yerdan server.php ni olib o'rniga json server manzilini yozamiz

            postData('http://localhost:3000/request', json)
                .then((data) => {
                    console.log(data)
                    showThanksModal(msg.success)

                })
                .catch(() => {
                    showThanksModal(msg.failure)

                })
                .finally(() => {
                    form.reset()
                    statusMessage.remove()

                })

        })
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog')
        prevModalDialog.classList.add('hide')
        openModal('.modal', modalTimerId)

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML = `
        <div class="modal__content">
          <div data-close class="modal__close">&times;</div>
            <div class="modal__title">
                ${message}
            </div>
        </div>
        `

        document.querySelector('.modal').append(thanksModal)
        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('show')
            prevModalDialog.classList.remove('hide')
            closeModal('.modal')
        }, 4000);
    }

    /**########################## TAMAM ################################# */
    /**######################## POST FORM ############################### */
}

export default form