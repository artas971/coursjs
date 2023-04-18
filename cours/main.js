
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
//les ternaires.
let prix = 4
prix >4 ?alert("cher") :alert("pas cher")
//switch case
let mois = 2;
switch(mois){
    case 1: alert("janvier");
        break;
    case 2 :
        alert("février");
        break;
    default:
        alert("mois inconnu");    
}
// les boucles
//boucle for est utilisée lorsqu'on connait le nombre de tour

for( i =1; i <=10 ; i++ ){
  console.log(" ma boucle n°" + 1);
}

//la boucle while est utilisé lorsqu'on ne sait pas le nombre de tour
let x = 1;

while( x< 3){

x++;
console.log("ma boucle n°"+ x);
}

/*let i = 1;

do{
i++;
console.log("ma boucle n°" + i);
} while(i <3)
*/

// les boucles imbriquées

let i = 0;

while (x < 3){
    console.log("ma boucle n°" + x);
    x++;
    for(i = 0; i < 3; i++){
        console.log("ma boucle FOR")
    }
    // Les array

/*let mytab = ['livre', 20, ['autocollants', 100]];
console.log(mytab);
//Mesurer la longueur du tableau
console.log(mytab.length);

//Pour accéder à 1 valeur du tableau
console.log(mytab[1]);
//Pour accéder à la dernière valeur du tableau
console.log(mytab[mytab.length-1]);
//récupérer un élément qui est à l'intérieur
//d'un sous tableau
console.log(mytab[2][1]);
//ajouter un élément à la fin de votre tableau
console.log(mytab.push("Alain"));
//supprimer le dernier élément du tableau
console.log(mytab.pop());
//ajouter un élément au début du tableau
console.log(mytab.unshift("Alain"));
//supprimer un élément au début du tableau
console.log(mytab.shift());
//Retrouver l'index d'un élément
console.log(mytab.indexOf("livre"));

//permet d'extraire une
let mytab2 = [1,2,3,4,5,6];
console.log(mytab2.slice(2,4));
*/
//console.log(mytab2.slice(1, -1));

//découpe le tableau à partir de la fin
//console.log(mytab2.slice(-3));

//selection de la 2ème valeur jusqu'a l'ant dernière
//console.log(mytab2.slice(1, -1));

let mytab2 = ["France", "Paris", "Allemagne", "Espagne"];
// pour convertir un tableau en string
//console.log(mytab2.join("/"));

//Parcourir un tableau for ...of
