    import clas from '../modules/class'
    import form from '../modules/form'
    import loader from '../modules/loader'
    import modal from '../modules/modal'
    import slider from '../modules/slider'
    import tab from '../modules/tab'
    import timer from '../modules/timer'
    import { openModal } from '../modules/modal'

    window.addEventListener('DOMContentLoaded', () => {
        const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 3000)

        slider()
        clas()
        form()
        loader()
        modal('[data-modal]', '.modal', modalTimerId)
        tab()
        timer()

    })