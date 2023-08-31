document.querySelector("#popit").addEventListener("click", () => {
   document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", () => {
   document.querySelector(".popup").classList.remove("active");
});




var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },

   breakpoints: {
      576: {
         slidesPerView: 2,
         spaceBetween: 10,
      },
      1200: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
   }
});