/* Carousel Slideshow */
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slidepic");
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex > slides.length){slideIndex=1}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides, 3000);
}

/* Preloader */


/*Menu*/
function P(){
  var x = document.getElementById("ulmenu");
  var y = document.getElementById("menulistx");
  var z = document.getElementById("menulist");
  if (x.style.display === "block", y.style.display === "block", z.style.display === "none"){
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  }
    else{
      x.style.display = "block";
      y.style.display = "block";
      z.style.display = "none";
    }
  }


  





