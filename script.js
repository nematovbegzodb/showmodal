const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnsOpenModal = document.querySelectorAll(".show-modal")


for(let key of btnsOpenModal) {
    key.addEventListener("click", removeModal)
}

function removeModal() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

function addModal() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

btnCloseModal.addEventListener("click", addModal)

overlay.addEventListener("click", addModal)

document.addEventListener("keydown", function(e) {
    if(e.key === "Escape" && !modal.classList.contains("hidden")) {
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
    }
})