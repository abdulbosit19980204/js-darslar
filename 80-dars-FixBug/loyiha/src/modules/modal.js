function openModal(modalSelector, modalTimerId) {
    // modal.classList.toggle('show')

    const modal = document.querySelector(modalSelector)

    modal.classList.add('show')
    modal.classList.remove('hide')

    document.body.style.overflow = 'hidden'
    if (modalTimerId) {
        clearInterval(modalTimerId)
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add('hide')
    modal.classList.remove('show')
        // modal.classList.toggle('hide')
        // modal.classList.toggle('show')
    document.body.style.overflow = ''
}


function modal(triggerSelector, modalSelector, modalTimerId) {


    /**########################## START ################################# */
    /**########################## MODUL ################################## */

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector)
        // modalCloseBtn = document.querySelector('[data-close]')

    modalTrigger.forEach(item => {

        item.addEventListener('click', () => openModal(modalSelector, modalTimerId))
    })

    // modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target == modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector)
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector)
        }
    })

    // const modalTimerId = setTimeout(openModal, 3000)

    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight
        ) {
            openModal(modalSelector, modalTimerId)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll)
        /**########################## TAMAM ################################# */
        /**########################## MODUL ################################## */
}

export default modal

export { openModal, closeModal }