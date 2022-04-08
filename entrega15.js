/* Entrega 1.5: Node Utils 

Nivell 1 - Exercici 1
Crea una funció que imprimeixi recursivament un missatge 
per la consola amb demores d'un segon. */
let n = -1000;
(() => {while (n<5000){
    setTimeout(() => {console.log('Imprimeixi recursivament un missatge');}, n+=1000);
}})();
/* Nivell 1 - Exercici 2
Crea una funció que, en executar-la, escrigui una frase en un fitxer. */
const fs = require('fs');
let archivo = 'ficheroN1E2.txt';
let contenido = "Escrigui una frase en un fitxer."
let crearFichero = (archivo, contenido) => {
    fs.writeFileSync(archivo, contenido);
}   
crearFichero(archivo, contenido);
/* Nivell 1 - Exercici 3
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */
function mostrarFichero(archivo){
    let texto = fs.readFileSync(archivo, {encoding:'utf8'});
    console.log(texto);
    return texto
}
mostrarFichero(archivo);
/* Nivell 2 - Exercici 1
Crea una funció que comprimeixi el fitxer del nivell 1. */
const archiver = require("archiver");
function comprimir(archivo){
    let output = fs.createWriteStream('./'+archivo+'.zip');
    let archive = archiver('zip');
    archive.pipe(output);
    archive.append(fs.createReadStream('./'+archivo), {name: archivo});
    archive.finalize();
}
comprimir(archivo);
/* Nivell 2 - Exercici 2
Crea una funció que llisti per la consola el contingut del directori 
d'usuari de l'ordinador utilizant Node Child Processes. */
function mostrarDirectorio(carpeta){ 
    let exec = require('child_process').exec;
          exec(carpeta, (err, stdout, stderr) => { 
            console.log("Contenido del directorio: "+stdout);
        });
}
mostrarDirectorio('ls'); //cambiar para windows *** dir
/* Nivell 3 - Exercici 1
Crea una funció que creï dos fitxers codificats en hexadecimal
i en base64 respectivament, a partir del fitxer del nivell 1 */
require('buffer').Buffer;
let ficheroBase64 = 'ficheroBase64.txt';
let ficheroHex = 'ficheroHex.txt';
function codificacion(mensaje){
    //Hexadecimal
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
    let textoBase64 = Buffer.from(mensaje, 'binary').toString('base64');
    crearFichero(ficheroBase64, textoBase64);
}
codificacion(mostrarFichero(archivo));
/* Crea una funció que guardi els fitxers del punt anterior, 
ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials */
let CryptoJS = require("crypto-js");
let key = '0123456789abcdef';
let iv = '0123456789abcdef';
let encrypted;
function encriptar(fichero, texto){
    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);
    encrypted = CryptoJS.AES.encrypt(texto, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    encrypted = encrypted.toString();
    fs.unlinkSync('./'+fichero) //Borra los archivos
    fichero = fichero.substring(0, fichero.length - 4); //Borra .txt
    crearFichero(fichero+"_ENCODED.txt", encrypted);
}
encriptar(ficheroBase64, mostrarFichero(ficheroBase64));
encriptar(ficheroHex, mostrarFichero(ficheroHex));
/* Crea una altra funció que desencripti i descodifiqui els fitxers de 
l'apartat anterior tornant a generar una còpia de l'inicial */
function desencriptarDescodificar(fichero, textoEncriptado){
    //Desencriptar
    let decrypted = CryptoJS.AES.decrypt(textoEncriptado, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
    //Descodificar
    let textoDesc = '';
    if (fichero=='ficheroHex_ENCODED.txt'){
        decrypted.split(' ').map( (i) => {
            tempAsciiCode = parseInt(i, 16);
            textoDesc = textoDesc + String.fromCharCode(tempAsciiCode);
        });
        crearFichero('ficheroN1E2HexCopia.txt', textoDesc);
    }else{
        textoDesc = Buffer.from(decrypted, 'base64').toString('utf-8');
        crearFichero('ficheroN1E2Base64Copia.txt', textoDesc);
    } 
}
desencriptarDescodificar('ficheroHex_ENCODED.txt', mostrarFichero('ficheroHex_ENCODED.txt'));
desencriptarDescodificar('ficheroBase64_ENCODED.txt', mostrarFichero('ficheroBase64_ENCODED.txt'));