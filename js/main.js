const menu = document.getElementById("menuBar");
const navLinks = document.getElementById("navLinks");
const closeNav = document.getElementById("closeNav");
// menu.addEventListener(onclick()=>{
    
// })
menu.onclick = ()=>{
navLinks.classList.add("left-0")
navLinks.classList.remove("-left-full")
}
closeNav.onclick = ()=>{
navLinks.classList.remove("left-0")
navLinks.classList.add("-left-full")
}



// ***********SWIPER.JS*************

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  













