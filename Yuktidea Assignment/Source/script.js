// Script for modal box
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const toggleModal = () => {
  modal.classList.toggle("show-modal");
};
const windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
};
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Script for product image
const imageHover = document.querySelectorAll(".image-hover");
const handler = (e) => {
  const imageSrc = e.target.src;
  document.getElementById("myImg").src = imageSrc;
};
for (let i = 0; i < imageHover.length; i++) {
  imageHover[i].addEventListener("mouseover", handler);
  imageHover[i].addEventListener("click", handler);
}
