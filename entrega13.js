 
/* Nivel 1 - Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent 
de si la Promise es resol o no. */
let funcionN1E1 = () => {
    return new Promise (function(resolve, reject){
        let x = Math.round(Math.random(0,2));
        if (x==0){
            resolve("Promesa resuelta. (N1E1)");
        }else{    
            reject("Promesa no resuelta. (N1E1)");
        }    
    })
}
funcionN1E1().then(
    (value) => {console.log(value)},
    (error) => {console.log(error)}
);
/* Nivell 1 - Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback 
i li passi a la funció un missatge o un altre (que s'imprimirà per consola) 
en funció del paràmetre rebut. */
let parametro = Math.round(Math.random(0,2));
function funcionCallback (frase){
    console.log(frase);
}
let funcionArrow = (parametro, funcionCallback) => {
    let mensaje;
    if (parametro==0){
        mensaje = "Mensaje del Nivel 1, ejercicio 2 número 1";
    }else{
        mensaje = "Mensaje del Nivel 1, ejercicio 2 número 2";
    }
    funcionCallback(mensaje);
};
funcionArrow(parametro, funcionCallback);
/* Nivell 2 - Exercici 1
Donats els objectes employees i salaries, crea una arrow function getEmployee() 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. */
let employees = [{
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
let id = 2;
let getEmployee = (idEmpleado) => {
    return new Promise ((resolve, reject) => {
        if (employees.findIndex(x => x.id === idEmpleado)!=-1) {
            let nombre = employees.find(data => data.id === idEmpleado);
            let salario = salaries.find(data => data.id === idEmpleado);
            let mensaje = "El salario de "+nombre.name+" es de "+salario.salary+" (N2E1)";
            resolve(mensaje);
        }else{
            reject("ID "+idEmpleado+" no encontrada (N2E1)");
        }
    })
}
getEmployee(id)
    .then(value => console.log(value))
    .catch(error => console.log(error));
/* Nivell 2 - Exercici 2
Crea una altra arrow function getSalary() similar a l'anterior que rebi
com a paràmetre un objecte employee i retorni el seu salari.*/
let employee = {id: 1, name: 'Linux Torvalds'};
let getSalary = (employee) => {
    return new Promise ((resolve, reject) => {
        let salarioEmpleado = salaries.find(data => data.id === employee.id);
        if (salarioEmpleado){
            resolve(salarioEmpleado);
        }else{
            reject("ID no encontrada (N2E2)");
        }
    })
}
getSalary(employee)
    .then(value => console.log("El salario es de "+value.salary+" (N2E2)"))
    .catch(error => console.log(error));
/* Nivell 2 - Exercici 3
Invoca la primera funció getEmployee() i després getSalary() niant 
l'execució de les dues promises. */
getEmployee(id)
    .then(value => getSalary(employees[1]))
    .then(salario => console.log("El salario es de "+salario.salary+" (N2E3)"))
/* Nivell 3 - Exercici 1
Fixa un element catch a la invocació del nivell anterior que 
capturi qualsevol error i el mostri per la consola. */
    .catch(error => console.log("Error (N3E1)"));