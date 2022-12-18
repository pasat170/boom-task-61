import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    const prices = document.querySelectorAll('.hot')
    prices.forEach(element => {

        element.innerHTML += '&#128293'
    })

});
