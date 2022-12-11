let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.add('active');
}
var swiper = new Swiper (".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})


// Swiper
var Swiper = new Swiper("Multiple-swiper",{
    spaceBetween: 2,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    centeredSlides: false,
    breakpoints: {
        0: {
            slidesPerview: 2,
        },
        568: {
            slidesPerview: 3,
        },
        768: {
            slidesPerview: 4,
        },
        1200: {
            slidesPerview: 5,
        }

    }
})

