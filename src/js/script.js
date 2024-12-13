// *** MENU ***
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;


  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
    ajout_class.classList.toggle("noscroll");
  });

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

// *** FAQ ACCORDEON ***

const faq__Accordeon = document.querySelector(".faq__accordeon");

faq__Accordeon.addEventListener("click", (event) => {
    if (event.target.tagName === "SUMMARY") {
        faq__Accordeon.querySelectorAll("details").forEach((detail) => {
            if (detail !== event.target.parentElement) {
                detail.open = false; // Ferme les autres accordéons
            }
        });
    }
});
