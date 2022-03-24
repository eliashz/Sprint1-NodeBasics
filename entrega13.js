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
    function(value) {console.log("Bien (N1E1)")},
    function(error) {console.log("Error (N1E1)")}
); 
/* Nivell 1 - Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback 
i li passi a la funció un missatge o un altre (que s'imprimirà per consola) 
en funció del paràmetre rebut. */
function funcionCallback (parametro){
    let promesa2 = new Promise  (function(resolve, reject){
        if (parametro==0){
            resolve();
        }else{    
            reject();
        }    
    });
    promesa2.then(
        function(value) {console.log("Hola (N1E2")},
        function(error) {console.log("Adiós (N1E2")}
    );
}
let parametro = Math.round(Math.random(0,2));
let arrowFuncion = (callback) => funcionCallback(parametro);
arrowFuncion(parametro, ()=>{});
/* Nivell 2 - Exercici 1
Donats els objectes employees i salaries, crea una arrow function getEmployee() 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. */
/* let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];
let getEmployee = (id) => { };
employees. */