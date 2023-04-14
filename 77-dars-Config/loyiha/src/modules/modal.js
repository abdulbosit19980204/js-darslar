function modal() {


    /**########################## START ################################# */
    /**########################## MODUL ################################## */

    const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal')
        // modalCloseBtn = document.querySelector('[data-close]')

    modalTrigger.addEventListener('click', openModal)

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

    function openModal() {
        // modal.classList.toggle('show')

        modal.classList.add('show')
        modal.classList.remove('hide')

        document.body.style.overflow = 'hidden'
        clearInterval(modalTimerId)
    }

    function closeModal() {
        modal.classList.add('hide')
        modal.classList.remove('show')
            // modal.classList.toggle('hide')
            // modal.classList.toggle('show')
        document.body.style.overflow = ''
    }

    /**########################## TAMAM ################################# */
    /**########################## MODUL ################################## */
}

module.exports = modal