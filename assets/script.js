let slides = [
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
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"}];
// declarer un tableau
let tab=[];
tab=Object.values(slides);
let banner=document.querySelector("#banner");
//cibler la balise en passant par sa classe
let slide=document.querySelector(".slide");
let p=document.querySelector(".p");
//recuperer les fleches gauches et droites
let arrow_left=document.querySelector(".arrow_left");
arrow_left.addEventListener("click", previmg);
let arrow_right=document.querySelector(".arrow_right");
arrow_right.addEventListener("click", nextimg);
var i=0;
//la longueur de tableau
const numimg = tab.length;
//CREATION DES POINTS DE SLIDER
let dots=document.querySelector(".dots");
//savoir combien de point mettre
for ( let i=0; i<=numimg-1; i++){
  if (i=0) {
    d.classList.add("dot_selected");
  }
let d=document.createElement("div");
d.classList.add("dot");
dots.appendChild(d);

}

function previmg() {
  // tab[0].image;
  console.log(tab[0].image);

  /*dot[i].classList.remove("dot_selected");*/
  i--;
  if (i < 0) {
    i = numimg - 1;
  }
  slide.src = "./assets/images/slideshow/" + tab[i].image;
  p.innerHTML=tab[i].tagLine;
  /* dot[i].classList.add("dot_selected");*/

}


function nextimg() {
  /*dot[i].classList.remove("dot_selected");*/
 i++;
  if(i >numimg-1)
  { i=0;
}
slide.src = "./assets/images/slideshow/" + tab[i].image;
p.innerHTML=tab[i].tagLine;
 
   }
   /*dot[i].classList.add("dot_selected");*/