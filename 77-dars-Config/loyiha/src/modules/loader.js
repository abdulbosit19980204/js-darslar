function loader() {
    // Loader
    let loader = document.querySelector('.loader')
    setTimeout(() => {
        // loader.classList.remove('loader')
        loader.style.opacity = '0'
        setTimeout(() => {
            // loader.style.display = 'none'
            loader.classList.remove('loader')
        }, 500);
    }, 1000);
}

module.exports = loader