/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.
*/

const placeNumber = []
let placeColumn = 0

for (let i = 1; i <= 26; i++){
  placeColumn = placeColumn + 1;
  let placeRow = 0
  for(let j = 1; j <= 100; j++){
    placeRow = placeRow + 1;
    let result = ( `${placeColumn}-${placeRow}`);
    placeNumber.push(result); 
  }
}
console.log(placeNumber);