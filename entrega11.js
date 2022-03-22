let exercici1 = [];
//Nivell 1
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
    return `Bienvenido a la IT Academy, ${nom}`;
}
console.log(valor());
//Nivell 3 Exercici 1
function contar(){
    for (let k=0; k<=9; k++){
        console.log(k);
    }  
}
for (let k=0; k<=9; k++){
    exercici1.push(contar());
}
//Nivell 3 Exercici 2
let nom32 = "Max Dembo";
let anonima = (function () { console.log(nom32); }());