'use strict'

function btnfunc() {


    const btn = document.querySelector('.btn-warning'),
        errorMsg = document.querySelector('h4')



    try {
        btn.addEventListener('click', () => {
            console.log('click');
        })
    } catch (error) {
        console.log(error.message);
        errorMsg.textContent = error.message
    }

}

// module.export = btnfunc

export { btnfunc }