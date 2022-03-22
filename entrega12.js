//Nivell 1 Exercici 1
const primerArrow = () => "Elías" + "Huerta";
console.log(primerArrow());
//Nivel 2 Exercici 1
const segundoArrow = parametro => ({valor: parametro});
console.log((segundoArrow(10)));
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
function ciudad(nombre, poblacion, gentilicio){
    this.nombre = nombre;
    this.poblacio = poblacion;
    this.gentilicio = gentilico;
}
