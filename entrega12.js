//Entrega 1.2: Classes & Arrow Functions
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
let Fruta = function() {
    if (this.constructor === Fruta) {
      throw new Error("No se puede instanciar una clase abstracta.");
    }
};
Fruta.prototype.say = function() {
    throw new Error("Método abstracto.");
}
let pera = new Fruta();
pera.say();