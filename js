document.addEventListener("DOMContentLoaded", function () {
  const modalBtn = document.querySelector(".btn");
  const modal = document.querySelector(".modal_overlay");
  const closeBtn = document.querySelector(".closebtn");

  modalBtn.addEventListener("click", function () {
    modal.classList.add("open-modal");
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
  });
});
 
