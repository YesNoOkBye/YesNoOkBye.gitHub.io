

const cartButton = document.querySelector("#cart-button");
const closeButton = document.querySelector("#modal-window");

cartButton.addEventListener("click", modalOpen);
closeButton.addEventListener("click", modalOpen);



function modalOpen() {
    closeButton.classList.toggle("modal-open");
}

new WOW().init();