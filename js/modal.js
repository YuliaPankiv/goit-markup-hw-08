const refs = {
  openModalBtn: document.querySelector("[data-open-model]"),
  closeModalBtn: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-modal]"),

};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
  document.body.classList.toggle("modal-open")
  refs.backdrop.classList.toggle("is-hidden");

}
function logBackdropClick() {
  console.log("click on backdrop");
}
