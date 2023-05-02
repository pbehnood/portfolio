// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





// slide show


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //for (i=0; i< dots.length; i++) {
  //  dots[i].style.display= "none";
  //}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}





let tesIndex = 1;
showTes(tesIndex);

function plusTes(n) {
  showTes(tesIndex += n);
}


function showTes(n) {
  let i;
  let tes = document.getElementsByClassName("container");
  let dotess = document.getElementsByClassName("dotes")
  if (n > tes.length) {tesIndex = 1}    
  if (n < 1) {tesIndex = tes.length}
  for (i = 0; i < tes.length; i++) {
    tes[i].style.display = "none";  
  }
  for (i = 0; i < dotess.length; i++) {
    dotess[i].className = dotess[i].className.replace(" active", "");
  }
  tes[tesIndex-1].style.display = "flex";  
  dotess[tesIndex-1].className += " active";
}

