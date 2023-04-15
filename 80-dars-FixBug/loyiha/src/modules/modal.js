function openModal(modalSelector) {
    // modal.classList.toggle('show')

    const modal = document.querySelector(modalSelector)

    modal.classList.add('show')
    modal.classList.remove('hide')

    document.body.style.overflow = 'hidden'
    clearInterval(modalTimerId)
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add('hide')
    modal.classList.remove('show')
        // modal.classList.toggle('hide')
        // modal.classList.toggle('show')
    document.body.style.overflow = ''
}


function modal(triggerSelector, modalSelector) {


    /**########################## START ################################# */
    /**########################## MODUL ################################## */

    const modalTrigger = document.querySelector(triggerSelector),
        modal = document.querySelector(modalSelector)
        // modalCloseBtn = document.querySelector('[data-close]')

    modalTrigger.addEventListener('click', () => { openModal(modalSelector) })

    // modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target == modal || e.target.getAttribute('data-close') == '') {
            closeModal()
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    })

    const modalTimerId = setTimeout(openModal, 3000)


    /**########################## TAMAM ################################# */
    /**########################## MODUL ################################## */
}

export default modal

export { openModal, closeModal }