// Déclaration d'une variable
//let firstname;
//Assination de valeur
//Firstname ="Paul" ;
//Déclaration et assignation de valeur
let firstname = "paul";
let lastname= "dupond";
// Valeur qui ne change  pas 
const number = 12354;
console.log(number);
//Permet de connaitre le type de variable
console.log(typeof(firstname));
console.log(typeof(number));
//Manipulation des string
let myString ="ceci est une chaine de caractère";
//Compter le nombre de caractère espace compris
console.log(myString.length);
//Récupérer un caractère d'une chaine
console.log(myString[0]);
//Récupérer une chaine de caractère à partir de la fin de la chaine de caractère
console.log(myString[myString.length-1]);
//Récupérer une  chaine de caractère à l'interrieur d'une autre
console.log(myString.indexOf("une chaine"));
//Récupérer une partie de la chaine de caractère
console.log(myString.slice(9,19));
//Remplacer un élément
console.log(myString.replace("ceci est une " , "Voici ma "));
//Mettre en majuscule une string
console.log(myString.toUpperCase());
//Mettre en minuscule une string
console.log(myString.toLowerCase());
//La concaténation
console.log('l\'artiste' + firstname );
console.log('l\'artiste + ${firstname} vous salut');
let identity = "Bonjour" .concat(firstname," ", lastname);
console.log(identity);
//Boite de dialogue
alert(firstname);
//Confirmer le choix
confirm("Voulez-vous vraiment choisir cette option");
//Demander une information aux utilisateurs
let age =parseInt(prompt("Quel est votre âge ?"));
console.log(typeof(age));
// Convertir une chaine de caractère en nombre
parseInt()
//Les opérateurs mathématiques
// %-> Modulo corespond au reste de la division
//Regrouper les variable 
let nbr1=8 ,nbr2=5, result;
result = nbr1+nbr2
//Incrémentation
let num=2;
document.write(num= num + 2)
document.write(num +=2);
document.write(num++);
//Décrémentation
let num2=2;
document.write(num= num - 2)
document.write(num -=2);
document.write(num--);
