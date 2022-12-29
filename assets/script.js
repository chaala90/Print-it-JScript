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
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }];
// declarer un tableau
let tab = [];
//recuperer les objets d'un tableau
tab = Object.values(slides);
let banner = document.querySelector("#banner");
//cibler la balise en passant par sa classe
let slide = document.querySelector(".slide");
let p = document.querySelector(".p");
//recuperer les fleches gauches et droites
let arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", previmg);
let arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", nextimg);
//cilbler la balise qui contient la classe dot_selected
let dot_img = document.getElementsByClassName("dot");
var i = 0;
//la longueur de tableau
const numimg = tab.length;
//CREATION DES POINTS DE SLIDER
let dots = document.querySelector(".dots");
//savoir combien de point mettre
for (let i = 0; i <= numimg - 1; i++) {
  //creer les elements div
  let d = document.createElement("div");
  //creer les classes dot
  d.classList.add("dot");
  //mettre les classes dot dans la classe dots
  dots.appendChild(d);

}
//la fonction de gauche
function previmg() {
  //retirer le dot_selected
  dot_img[i].classList.remove("dot_selected");
  console.log(tab[0].image);
  i--;
  if (i < 0) {
    i = numimg - 1;
  }
  //cibler le chemin des images 
  slide.src = "./assets/images/slideshow/" + tab[i].image;
  //modifier le texte de l'image
  p.innerHTML = tab[i].tagLine;
  //remettre le dot-selected dans la position courante
  dot_img[i].classList.add("dot_selected");
}


//la fonction de droite
function nextimg() {
  // retirer le dot-selected
  dot_img[i].classList.remove("dot_selected");
  i++;
  if (i > numimg - 1) {
    i = 0;
  }
  slide.src = "./assets/images/slideshow/" + tab[i].image;
  p.innerHTML = tab[i].tagLine;
  //remettre le dot-selected dans la position courante
  dot_img[i].classList.add("dot_selected");
}
