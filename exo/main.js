let nombres = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

console.log(nombres.pop()); 
console.log(nombres.shift()); 

console.log(nombres.length); 

for(nombre of nombres){
    console.log(nombre);
}

let prenoms = ['Ali', 'Nour', 'Jean', 'Carole', 'Ibrahim', 'Alma'];

for(prenom of prenoms){
    console.log(prenoms.slice(2,6));
}

for(prenom of prenoms){
    console.log("Bonjour " + prenom);
}
