const aboutLink = document.querySelector(".about")
const aboutModal = document.querySelector(".about-modal")
const close = document.querySelector(".close")
const toysLink = document.querySelector('.toys')
const toysModal = document.querySelector('.toys-modal')
const closeToys = document.querySelector('.close-toys')

aboutLink.addEventListener("click", function () {
  aboutModal.classList.remove("d-none")
})

close.addEventListener("click", function () {
  aboutModal.classList.add("d-none")
})

toysLink.addEventListener("click", function () {
  toysModal.classList.remove("d-none")
})

closeToys.addEventListener("click", function () {
  toysModal.classList.add("d-none")
})

