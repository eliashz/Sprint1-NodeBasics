let funciones = [];
//Nivell 1 Excercici 1
function nombre (nom){
        console.log(nom);
}
nombre ("Elías Huerta");
//Nivell 2 Exercici 1
let nom = "Elías";
let apellido = "Huerta";
let mensaje = `Hola, ${nom} ${apellido}.`;
console.log(mensaje); 
//Nivell 2 Exercici 2
function valor (){
    return "lunes"
}
console.log(`Bienvenido a la IT Academy, hoy es ${valor()}.`);
//Nivell 3 Exercici 1
function contar(){
    for (let i=0;i<=9;i++){
        console.log(i);
    }
}
for (let i=0;i<=9;i++){
    funciones.push(contar);
    funciones[i]();
}
//Nivell 3 Exercici 2
let nom32 = "Max Dembo";
let anonima = (function (nomn) { console.log(nom32); }());