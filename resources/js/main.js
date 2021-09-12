//slideshow effect
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}


//horizontal scrolling effect
var windowWidth = window.innerWidth;
var horizontalLength = document.querySelector(".card-wrapper").scrollWidth;
var distFromTop = document.querySelector(".bio-container").offsetTop;
var scrollDistance = distFromTop + horizontalLength - windowWidth;

console.log(scrollDistance);

document.querySelector(".bio-container").style.height = horizontalLength + "px";

window.onscroll = function() {
  var scrollTop - window.pageYOffset;

if(scrollTop >= distFromTop && scrollTop <= scrollDistance){
  document.querySelector(".card-wrapper").style.transform = "translateX(-" +(scrollTop - distFromTop) + "px)";
}

  console.log(scrollTop)
}
