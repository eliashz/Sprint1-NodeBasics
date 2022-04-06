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
let getEmployee = (idEmpleado) => {
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
let getSalary = (employee) => {
  return new Promise (function(resolve, reject){
      if (employees.findIndex(x => x.id === employee.id)!=-1){
          resolve();
      }else{
          reject();
      }
  })
  .then(
      function (value) {
        let obj = salaries.find(data => data.id === employee.id);
        console.log("El salario es de "+obj.salary);
      },
      function(error) {console.log("ID no encontrada.");}  
  );
} 
/* Nivell 1 - Exercici 2
Crea una funció asíncrona que rebi un id d'empleat i imprimeixi
per pantalla el nom de l'empleat i el seu salari, usant les 
funcions que has definit a l'exercici anterior. */
const datosEmpleado = async(id, employee) => {
    try{
        const employee12 = await getEmployee(id);
        const salary = await getSalary(employee);
    }catch (error){
        console.log(error);
    }
}
let id = 2;
let employee = employees[2];
datosEmpleado(id, employee);
/* Nivell 2 - Exercici 1
Crea una nova funció asíncrona que cridi a una altra que retorni 
una Promise que efectuï la seva funció resolve() després de 2 segons 
de la seva invocació. */
let funcionN2E1 = () => {
    return new Promise (function(resolve, reject){
        setTimeout(() => {resolve()}, 2000);})
}
async function fetchingN2E1 (){
    try{
        let n2e1 = funcionN2E1().then(
        function(value) {console.log("Console.log del Nivel 2 Ejercicio 1")},
    ); ;
    }catch(err){
        console.log(err);
    }
}
fetchingN2E1();
/* Nivell 3 - Exercici 1
Captura tots els errors possibles dels nivells 1 i 2.*/
