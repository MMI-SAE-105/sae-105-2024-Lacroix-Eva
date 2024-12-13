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
  const items = document.querySelectorAll(".items_carousel");
  const itemWidth = items[0].clientWidth;

  
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
  });
}

// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");

// Close all details by default

accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
{
  accordeon.addEventListener("click", ()=> {
    accordeon.querySelectorAll("details").forEach((det)=> (det.open=false));
})};