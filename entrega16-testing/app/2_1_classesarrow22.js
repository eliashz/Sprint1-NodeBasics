//Nivell 2 
export default class Persona {
    constructor (nom){
        this.nom = nom;
    }
    dirNom(){
        console.log("El nombre es "+ this.nom);
    }
}
new Persona ("Maynard").dirNom();