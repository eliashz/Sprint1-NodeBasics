/* Nivell 1 - Exercici 1
Donats els objectes employees i salaries, crea una arrow
function getEmployee que retorni una Promise efectuant la 
cerca en l'objecte pel seu id. Crea una altra arrow function 
getSalary que rebi com a paràmetre un objecte employee i retorni 
el seu salari. */
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
let idEmpleado = 3;
let employee = employees[1];
let getEmployee = () => {
    return new Promise (function(resolve, reject){
        if (employees.findIndex(x => x.id === idEmpleado)!=-1){
            resolve();
        }else{
            reject();
        }
    })
    .then(
        function (value) {
        let nombre = employees.find(data => data.id === idEmpleado);
        console.log("La ID "+idEmpleado+" pertenece a "+nombre.name);
        let salario = salaries.find(data => data.id === idEmpleado);
        console.log("El salario de la ID "+idEmpleado+" es "+salario.salary);},
        function(error) {console.log("ID no encontrada.");}
    );
}
getEmployee();
let getSalary = (employee) => {
    let sal = salaries.find(data => data.id === employee.id);
    console.log("El salario es de "+sal.salary);
}
getSalary(employee); 
/* Nivell 1- Exercici 2
Crea una funció asíncrona que rebi un id d'empleat i imprimeixi
per pantalla el nom de l'empleat i el seu salari, usant les 
funcions que has definit a l'exercici anterior. */
/* let datosEmpleado = (idEmpleado) => {
    setTimeout(() => {

    }, 2000);
} */