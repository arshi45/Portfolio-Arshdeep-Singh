const carouselSlide = $(".carousel-slide");
const carouselImg = $('.carousel-slide img');

let counter = 1;
console.log(carouselSlide);
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let width = carouselImg[0].style.width;

carouselSlide.style.transform = 'tranformX('+(-width*counter)+'px);'

prev.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform .4 ease-in-out';
    carouselSlide.style.transform = 'tranformX('+(-width*counter)+'px);'
    counter++;
});

next.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform .4 ease-in-out';
    carouselSlide.style.transform = 'tranformX('+(-width*counter)+'px);';
    counter--;
});

carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImg[counter].id === "clone2"){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length-2;
        carouselSlide.style.transform = 'tranformX('+(-width*counter)+'px);'
    }
});