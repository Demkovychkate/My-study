
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let prev= document.querySelector('.prev');
let next=document.querySelector('.next');

let slideNow = 0;

function MySlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  })

  if (index === 0) {
    prev.style.display = "none";
  } else {
    prev.style.display = "block";
  }

  if (index === slides.length - 1) {
    next.style.display = "none";
  } else {
    next.style.display = "block";
  }
}

function nextSlide() {
  if (slideNow < slides.length - 1) {
    slideNow++;
    MySlide(slideNow);
  }
}

function prevSlide() {
  if (slideNow > 0) {
    slideNow--;
    MySlide(slideNow);
  }
}


prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);


MySlide(slideNow);