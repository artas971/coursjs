
let premierernote =parseInt(prompt("Quel est votre 1er note ?"));
let deuxiemenote =parseInt(prompt("Quel est votre 2eme note ?"));
let troisiemenote =parseInt(prompt("Quel est votre 3eme note ?"));
let moyenne = (premierernote+deuxiemenote+troisiemenote)/3;
let affichermoyenne ;
if (moyenne >= 17) { affichermoyenne="exellent";}
else if (moyenne >= 15) { affichermoyenne="très bien";}
    else if (moyenne >= 13) { affichermoyenne="bien";}
    else if (moyenne >= 10) { affichermoyenne="moyen";} 
 else { affichermoyenne="insuffisant";
};

document.write("Votre moyenne est de " + moyenne  + " hum... " + affichermoyenne + "!" );

