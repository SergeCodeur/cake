const NavRight = document.querySelector(".nav-right");
const Navbar = document.querySelector(".nav-bar");
const BntToggleNav = document.querySelector(".burger-icons");

BntToggleNav.addEventListener("click", () => {
  NavRight.classList.toggle("active");
});

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerGroup: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("scroll", () => {
  if (scrollY > 300) {
    Navbar.classList.add("active");
  } else if (scrollY < 1) {
    Navbar.classList.remove("active");
  }
});
