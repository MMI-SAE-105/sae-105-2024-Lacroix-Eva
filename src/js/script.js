// *** MENU ***
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}

// *** CAROUSEL ***
const carousel = document.querySelector(".carousel_ecran");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel && prevButton && nextButton) {
  // Sélection de tous les items dans le carousel
  const items = document.querySelectorAll(".items_carousel");

  // Largeur d’un item (on suppose que tous les items ont la même largeur)
  const itemWidth = items[0].clientWidth;

  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
  });
}

