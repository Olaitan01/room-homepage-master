let rightBtn=document.querySelector(".rightBtn");
let leftBtn=document.querySelector(".leftBtn");


let slideIndex=1;
showSlide(slideIndex);

rightBtn.addEventListener("click",next);
function next(n){
    n=1
    showSlide((slideIndex += n))
    
};

leftBtn.addEventListener("click",prev)
function prev(n){
    n=1
    showSlide((slideIndex -= n))
    
};

function showSlide(n){
    let i;
    let slides=document.querySelectorAll(".carousel__img")
    let note=document.querySelectorAll(".note")
    if (n > slides.length) {
             slideIndex = 1;
          }

          if (n < 1) {
            slideIndex = slides.length;
          }
          if (n > note.length) {
            slideIndex = 1;
         }

         if (n < 1) {
           slideIndex = note.length;
         }

    for(let i=0; i<slides.length; i++){
        slides[i].style.display="none"
    }
    for(let i=0; i<note.length; i++){
        note[i].style.display="none"
    }
    slides[slideIndex-1].style.display="block"
    note[slideIndex - 1].style.display="block"
}

//Mobile Burger Menu
const burgerBtn=document.querySelector(".menu-btn")
const openBtn=document.querySelector(".openBtn")
const closeBtn=document.querySelector(".closeBtn")
const nav=document.querySelector(".mobile-nav")

burgerBtn.addEventListener("click",()=>{
    if(closeBtn.style.display=="block"){
        openBtn.style.display="block"
        nav.style.transform="translateY(-6em)"
        closeBtn.style.display="none"
    }else{
        openBtn.style.display="none"
        nav.style.transform="translateY(0em)"
        closeBtn.style.display="block"
    }
})