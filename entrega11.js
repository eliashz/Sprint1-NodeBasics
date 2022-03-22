let exercici1 = [];
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
    for (let k=0; k<=9; k++){
        console.log(k);
    }  
}
for (let k=0; k<=9; k++){
    exercici1[k]=contar;
}
console.log(exercici1);


//Nivell 3 Exercici 2
let nom32 = "Max Dembo";
let anonima = (function (nomn) { console.log(nom32); }());