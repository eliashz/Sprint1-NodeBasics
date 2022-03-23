/* Nivel 1 Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent 
de si la Promise es resol o no. */
let promesa = new Promise  (function(resolve, reject){
    let x = 0;
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