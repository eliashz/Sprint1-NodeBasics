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
    let promesa = new Promise  (function(resolve, reject){
        if (parametro==0){
            resolve();
        }else{    
            reject();
        }    
    });
    promesa
        .then (res => {console.log("Hola (N1E2)")})
        .catch (err => {console.log("Adeu (N1E2)")});
}
let parametro = Math.round(Math.random(0,2));
let arrowFuncion = callback => funcionCallback(parametro);
arrowFuncion(parametro, ()=>{});
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
let promesa21 = new Promise (function(resolve, reject){
    resolve();
});
promesa21.then (res => {
    employees.forEach(object => {
        console.log("ID de Employees: "+object.id);
    })
    salaries.forEach(object => {
        console.log("ID de Salaries: "+object.id);
    })
});
let getEmployee = () => {promesa21};
/* Nivell 2 - Exercici 2
Crea una altra arrow function getSalary() similar a l'anterior que rebi
com a paràmetre un objecte employee i retorni el seu salari.*/
let employee = employees[1];
let getSalary = (employee) => {
    let obj = salaries.find(data => data.id === employee.id);
    console.log("El salario es de "+obj.salary);
}
getSalary(employee)