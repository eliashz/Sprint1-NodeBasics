/* Entrega 1.4: Async / Await
Nivell 1 - Exercici 1
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
let id = 2;
let employee = {id: 1, name: 'Linux Torvalds'};
let getEmployee = (idEmpleado) => {
    return new Promise ((resolve, reject) => {
        if (employees.findIndex(x => x.id === idEmpleado)!=-1) {
            let nombre = employees.find(data => data.id === idEmpleado);
            resolve(nombre);
        }else{
            reject("ID "+idEmpleado+" no encontrada (N1E1)");
        }
    })
}
getEmployee(id)
    .then(value => console.log("La ID "+value.id+" pertenece a "+value.name+" (N1E1)"))
    .catch(error => console.log(error));
let getSalary = (employee) => {
    return new Promise ((resolve, reject) => {
        let salarioEmpleado = salaries.find(data => data.id === employee.id);
        if (salarioEmpleado){
            resolve(salarioEmpleado);
        }else{
            reject("ID no encontrada (N1E1)");
        }
    })
}
getSalary(employee)
    .then(value => console.log("El salario es de "+value.salary+" (N1E1)"))
    .catch(error => console.log(error));
/* Nivell 1 - Exercici 2
Crea una funció asíncrona que rebi un id d'empleat i imprimeixi
per pantalla el nom de l'empleat i el seu salari, usant les 
funcions que has definit a l'exercici anterior. */
const datosEmpleado = async(id) => {
    try{
        const employee12 = await getEmployee(id);
        const salario12 = await getSalary(employee12);
        console.log("El salario es "+salario12.salary+" (N1E2)");
    }catch (error){
        throw error;
    }
}
datosEmpleado(1);
/* Nivell 2 - Exercici 1
Crea una nova funció asíncrona que cridi a una altra que retorni 
una Promise que efectuï la seva funció resolve() després de 2 segons 
de la seva invocació. */
let funcionN2E1 = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {resolve("Console.log del Nivel 2 Ejercicio 1")}, 2000);})
}
async function fetchingN2E1 (){
    try{
        const resultado = await funcionN2E1(); 
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}
fetchingN2E1();
/* Nivell 3 - Exercici 1
Captura tots els errors possibles dels nivells 1 i 2.*/