let searchForm= document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click',function (){
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.toggle('active');

});

let cartBtn = document.querySelector('#cart-btn');
let shoppingCart = document.querySelector('.shopping-cart');
cartBtn.addEventListener('click',function (){
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
});

let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form');
loginBtn.addEventListener('click',function (){
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.toggle('active');


});

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let num = 1;
menuBtn.addEventListener('click',function (){
    if (num == 1) {
        navbar.style.clipPath = 'none';
        num = 0;
    } else {
        navbar.style.clipPath = 'polygon(0 0, 100% 0)';
        num = 1;
    }
});

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;
let animationContent = document.querySelectorAll('.home .slides-container .slide .content');
let animationImage = document.querySelectorAll('.home .slides-container .slide .image');
let prevSlide = document.querySelector('#prev-slide');
let nextSlide = document.querySelector('#next-slide');

prevSlide.addEventListener('click',prev);
nextSlide.addEventListener('click',next);

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    animationContent[index].style.animation = "fadeIn .4s linear";
    animationImage[index].style.animation = "fadeIn .4s linear";
}

function next(){
    // animation.style.animation = "fadeOut .4s linear;"
    // animation[index].style.animation = "fadeOut .4s linear";
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
    animationContent[index].style.animation = "fadeOut .4s linear";
    animationImage[index].style.animation = "fadeOut .4s linear";
}




