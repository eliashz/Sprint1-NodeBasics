//Nivell 1 Exercici 1 
console.log((() => {
    return "Elías" + "Huerta"; 
  })());
//Nivel 2 Exercici 1
const segundoArrow = parametro => ({valor: parametro});
console.log(segundoArrow(10));
//Nivell 2 Exercici 2
class Persona {
    constructor (nom){
        this.nom = nom;
    }
    dirNom(){
        console.log("El nombre es "+ this.nom);
    }
}
new Persona ("Maynard").dirNom();
//Nivell 3 Exercici 1
function Fruta (){
    this.frutaNombre = "frutaNombre";
}
Fruta.prototype.display=function(){ return "El nombre de la fruta es: "+this.frutaNombre}
function Comida (nombreComida){
    this.frutaNombre=nombreComida;
}
Comida.prototype=Object.create(Fruta.prototype);
var comida = new Comida("Pera limonera");
console.log(comida.display()); 