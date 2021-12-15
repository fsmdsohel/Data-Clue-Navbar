const offering = document.querySelector("#offering");
const navbar = document.querySelector("#navbar");
const offeringItems = document.querySelector("#offering_items");

const humbergerMenu = document.querySelector("#handleHumbergerMenu");
const mobileMenu = document.querySelector(".mobile_menu");

const handleHumbergerMenu = () => {
  mobileMenu.classList.toggle("active");
  humbergerMenu.classList.toggle("active");
  navbar.classList.toggle("active");
};

humbergerMenu.addEventListener("click", handleHumbergerMenu);

function offeringFun() {
  offering.classList.toggle("active");
  offeringItems.classList.toggle("active");
  navbar.classList.toggle("active");
}
offering.addEventListener("click", offeringFun);
