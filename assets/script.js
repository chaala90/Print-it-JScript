const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];
//var src= "./assets/images/slideshow/";
let arrow_left=document.querySelector(".arrow_left");
arrow_left.addEventListener("click", previmg);
let arrow_right=document.querySelector(".arrow_right");
arrow_right.addEventListener("click", nextimg);
let current_image=document.getElementById("image");
//var table=Object.values(slides);
var i=0;
var slide=["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"];


function previmg() {
  document.getElementById("image").src = slide[i];
  if (i= slide.length-1);
  
  return i--;

  //console.log("test");

}
function nextimg() {
  document.getElementById("image").src = slide[i];
  if(i >slide.length-1);
  
  return i++;
  
}
/*function setimg(){
  return image.setAttribute('src', './assets/images/slideshow', slides[i+1]);

}*/