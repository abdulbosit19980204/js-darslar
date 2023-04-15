    import clas from '../modules/class'
    import form from '../modules/form'
    import loader from '../modules/loader'
    import modal from '../modules/modal'
    import slider from '../modules/slider'
    import tab from '../modules/tab'
    import timer from '../modules/timer'

    window.addEventListener('DOMContentLoaded', () => {
        slider()
        clas()
        form()
        loader()
        modal('[data-modal]', '.modal')
        tab()
        timer()

    })