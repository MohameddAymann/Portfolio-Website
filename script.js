const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const navbarMenu = document.querySelector('.navbar .menu');
const menuBtnActive = document.querySelector('.menu-btn i');
const scrollBtn = document.querySelector('.scroll-up-btn');
const neww = document.querySelector('.neww');
const neww1 = document.querySelector('.neww1');
const neww2 = document.querySelector('.neww2');
const neww3 = document.querySelector('.neww3');
const neww4= document.querySelector('.neww4');
const neww5 = document.querySelector('.neww5');


window.addEventListener('scroll', ()=>{
    if(scrollY > 20){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
})

window.addEventListener('scroll', ()=>{
    if(scrollY >= 600){
       scrollBtn.classList.add('show')
    }else{
        scrollBtn.classList.remove('show') 
    }
})

menuBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active')
    menuBtnActive.classList.toggle('active')
})
neww.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active')
    menuBtnActive.classList.toggle('active')
})
neww1.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active')
    menuBtnActive.classList.toggle('active')
})
neww2.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active')
    menuBtnActive.classList.toggle('active')
})
neww3.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active')
    menuBtnActive.classList.toggle('active')
})
neww4.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active')
    menuBtnActive.classList.toggle('active')
})
neww5.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active')
    menuBtnActive.classList.toggle('active')
})


const typed = new Typed(".typing-animation", {
    strings: ["Developer", "Freelancer" ,"Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
const typed2 = new Typed(".typing2-animation", {
    strings: ["Developer", "Freelancer" ,"Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
