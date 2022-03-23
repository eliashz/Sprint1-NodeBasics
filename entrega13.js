/* Nivel 1 - Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent 
de si la Promise es resol o no. */
let promesa = new Promise  (function(resolve, reject){
    let x = Math.round(Math.random(0,2));
    if (x==0){
        resolve();
    }else{    
        reject();
    }    
});
promesa.then(
    function(value) {console.log("Bien")},
    function(error) {console.log("Error")}
); 
/* Nivell 1 - Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback 
i li passi a la funció un missatge o un altre (que s'imprimirà per consola) 
en funció del paràmetre rebut. */
function callback (parametro){
    let promesa = new Promise  (function(resolve, reject){
        let x = Math.round(Math.random(0,2));
        if (x==0){
            resolve();
        }else{    
            reject();
        }    
    });
}
let parametro = Math.round(Math.random(0,2));
let arrowFunc = (parametro, callback) => callback(parametro);
/* Nivell 2 - Exercici 1
Donats els objectes employees i salaries, crea una arrow function getEmployee() 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. */
hola
