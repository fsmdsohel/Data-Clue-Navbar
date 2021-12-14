const offering = document.querySelector("#offering");
const offeringItems = document.querySelector("#offering_items");

const humbergerMenu = document.querySelector("#handleHumbergerMenu");
const mobileMenu = document.querySelector(".mobile_menu");

const handleHumbergerMenu = () => {
  mobileMenu.classList.toggle("active");
};

humbergerMenu.addEventListener("click", handleHumbergerMenu);

offering.addEventListener("click", () => {
  offering.classList.toggle("active");
  offeringItems.classList.toggle("active");
});
