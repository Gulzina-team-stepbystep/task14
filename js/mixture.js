// var hamburger = document.querySelector('.hamburger');
// var nav = document.querySelector('.nav');

// hamburger.addEventListener('click', function() {
//     hamburger.classList.toggle('is-active');
//     nav.classList.toggle('is-active');
// });


const hamburger = document.querySelector(".hamburger");

const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
    menu.classList.toggle("menu-show");
});