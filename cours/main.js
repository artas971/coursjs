// Déclaration d'une variable
//let firstname;
//Assination de valeur
//firstname ="Paul" ;
//Déclaration et assignation de valeur
let firstname = "paul";
// Valeur qui ne change  pas 
const number = 12354;
console.log(number);
//permet de connaitre le type de variable
console.log(typeof(firstname));
console.log(typeof(number));
//Manipulation des string
let myString ="ceci est une chaine de caractère";
//compter le nombre de caractère espace compris
console.log(myString.length);
// récupérer un caractère d'une chaine
console.log(myString[0]);
//récupérer une chaine de caractère à partir de la fin de la chaine de caractère
console.log(myString[myString.length-1]);
//récupérer une  chaine de caractère à l'interrieur d'une autre
console.log(myString.indexOf("une chaine"));
//récupérer une partie de la chaine de caractère
console.log(myString.slice(9,19));
//remplacer un élément
console.log(myString.replace("ceci est une " , "Voici ma "));
//mettre en majuscule une string
console.log(myString.toUpperCase());
//mettre en minuscule une string
console.log(myString.toLowerCase())
