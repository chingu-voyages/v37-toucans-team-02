const modal = document.querySelector(".add-gratitude-modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".add-gratitude-modal-close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick); 