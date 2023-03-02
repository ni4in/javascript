"use strict";
const e = 0;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btncloseModal = document.querySelector(".close-modal");
const showModalButtons = document.querySelectorAll(".show-modal");
console.log(showModalButtons);

function showModal() {
  console.log("function called");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < showModalButtons.length; ++i) {
  console.log("loop starts");
  console.log(showModalButtons[i]);
  showModalButtons[i].addEventListener("click", showModal);
}

btncloseModal.addEventListener("click", closeModal);
<<<<<<< HEAD

=======
document.body.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
>>>>>>> 59bbd93ac2409fe9458a5b2df85a12791ebb13c6
