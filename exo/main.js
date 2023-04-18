let nombres = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

console.log(nombres.pop()); 
console.log(nombres.shift()); 

console.log(nombres.length); 

for(nombre of nombres){
    console.log(nombre);
}

let prenoms = ['Ali', 'Nour', 'Jean', 'Carole', 'Ibrahim', 'Alma'];

for (let i = 2; i < prenoms.length; i++) {
  console.log(prenoms[i]);
}

for(prenom of prenoms){
    console.log("Bonjour " + prenom);
}


