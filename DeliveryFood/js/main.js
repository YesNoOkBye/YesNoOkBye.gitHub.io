const cartButton = document.querySelector("#cart-button");
const close = document.querySelector("#modal-window");

cartButton.addEventListener("click", modalOpen);
close.addEventListener("click", modalOpen);


function modalOpen() {
    close.classList.toggle("modal-open");
}

new WOW().init();