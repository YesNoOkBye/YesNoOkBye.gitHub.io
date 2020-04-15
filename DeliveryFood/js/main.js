const cartButton = document.querySelector("#cart-button");
const closeButton = document.querySelector(".close");

const modal = document.querySelector(".modal")

cartButton.addEventListener("click", modalOpen);
closeButton.addEventListener("click", modalOpen);



function modalOpen() {
    modal.classList.toggle("modal-open");
}


