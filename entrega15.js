/* Entrega 1.5: Node Utils

Nivell 1 - Exercici 1
Crea una funció que imprimeixi recursivament un missatge 
per la consola amb demores d'un segon. */
let n = 0;
while (n<10000){
    setTimeout(() => {console.log('Imprimeixi recursivament un missatge');}, n+=1000);
}
/* Nivell 1 - Exercici 2
Crea una funció que, en executar-la, escrigui una frase en un fitxer. */
const fs = require('fs');
const archivo = 'prueba.txt';
const contenido = "Estoy escribiendo en un fichero."
fs.writeFileSync(archivo, contenido);
/* Nivell 1 - Exercici 3
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */