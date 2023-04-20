let monTitre = document.getElementById("monTitre"); //selection de mon h1 grace au dom

monTitre.innerHTML = "bonjour à tous"; //modification de mon titre

let paragraphes = document.querySelectorAll('p'); //selectionner mes balise p
console.log(paragraphes) //verification que mes balise p sont bien ma nouvelle variable sous forme de tableau
for (let i = 0; i < paragraphes.length; i++) {
  paragraphes[i].style.color = 'brown';
}// changement de la couleur de saisie en marron 

let para3 = document.getElementById('3'); //selectionné mon p3 par son id
para3.style.fontStyle = 'italic'; // lui mettre un fontstyle italic


let p1 = document.getElementById("1"); // sélectionne  l'id "1"
p1.classList.add("paraone"); // ajoute la classe "maClasse" à l'élément
console.log(p1)//verificationde la presence de la class paraone
let p4 = document.getElementById("4"); //  l'id "4"
p4.classList.remove("para4"); // supprime la classe "para4" de l'élément
console.log(p4)
let image = document.getElementById("img"); //selection de mon image par id 
image.src = "arbre.JPG";

