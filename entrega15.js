/* Entrega 1.5: Node Utils

Nivell 1 - Exercici 1 - COMENTADO!!!!*********************************
Crea una funció que imprimeixi recursivament un missatge 
per la consola amb demores d'un segon. */
/* let n = -500;
(() => {while (n<5000){
    setTimeout(() => {console.log('Imprimeixi recursivament un missatge');}, n+=500);
}})(); */
/* Nivell 1 - Exercici 2
Crea una funció que, en executar-la, escrigui una frase en un fitxer. */
const fs = require('fs');
const archivo = 'ficheroN1E2.txt';
const contenido = "Escrigui una frase en un fitxer."
function crearFichero(archivo, contenido){
    fs.writeFileSync(archivo, contenido);
}
crearFichero(archivo, contenido);
/* Nivell 1 - Exercici 3
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */
function mostrarFichero(archivo){
    let texto = fs.readFileSync(archivo, {encoding:'utf8'});
    console.log("Texto del N1E3: "+texto);
    return texto
}
mostrarFichero(archivo);
/* Nivell 2 - Exercici 1
Crea una funció que comprimeixi el fitxer del nivell 1. */
const archiver = require("archiver");
function comprimir(archivo){
    let output = fs.createWriteStream('./'+archivo);
    let archive = archiver('zip');
    archive.pipe(output);
    archive.append(fs.createReadStream('./'+archivo), {name: archivo});
    archive.finalize();
}
comprimir(archivo);
/* Nivell 2 - Exercici 2 - COMENTADO!!!!*********************************
Crea una funció que llisti per la consola el contingut del directori 
d'usuari de l'ordinador utilizant Node Child Processes. */
function mostrarDirectorio(){ 
    let exec = require('child_process').exec;
    exec('ls', () =>{
        let file = fs.readdirSync("./");
        console.log(file);
    }); 
}
//mostrarDirectorio();
/* Nivell 3 - Exercici 1
Crea una funció que creï dos fitxers codificats en hexadecimal
i en base64 respectivament, a partir del fitxer del nivell 1 */
function codificacion(mensaje){
    //Hexadecimal
    let ficheroHex = 'ficheroHex.txt';
    let textoHex = '';
    let tempASCII, tempHex;
    mensaje.split('').map( i => {
        tempASCII = i.charCodeAt(0)
        tempHex = tempASCII.toString(16);
        textoHex = textoHex + tempHex + ' ';
    });
    textoHex = textoHex.trim();
    crearFichero(ficheroHex, textoHex);
    //Base64
    let ficheroBase64 = 'ficheroBase64.txt';
    let textoBase64 = btoa(mensaje);
    crearFichero(ficheroBase64, textoBase64);
}
codificacion(mostrarFichero(archivo));
/* Crea una funció que guardi els fitxers del punt anterior, 
ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials */
let CryptoJS = require("crypto-js");
let  encrypted;
let key = '0123456789abcdef';
let iv = '0123456789abcdef';
function encriptar(texto){
    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);
    encrypted = CryptoJS.AES.encrypt(texto, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    encrypted = encrypted.toString();
    crearFichero('ficheroAES.txt', encrypted);
}
encriptar(mostrarFichero(archivo));
/* Crea una altra funció que desencripti i descodifiqui els fitxers de 
l'apartat anterior tornant a generar una còpia de l'inicial */
let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});
decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
console.log(decrypted);
crearFichero('copiaFicheroN1E2.txt', decrypted);
