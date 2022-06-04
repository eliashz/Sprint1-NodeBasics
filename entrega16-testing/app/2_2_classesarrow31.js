//Nivell 2
export default Fruta = function() {
  if (this.constructor === Fruta) {
    throw new Error("No se puede instanciar una clase abstracta.");
  }
};
Fruta.prototype.say = function() {
  throw new Error("Método abstracto.");
}
Fruta.prototype.tipo = "";
let pera = new Fruta();
pera.say();