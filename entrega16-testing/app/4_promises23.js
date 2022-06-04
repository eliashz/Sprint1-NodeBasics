/* Crea els tests corresponents per verificar el funcionament de l'exercici 
Promises & Callbacks Nivell 2 - Exercici 3 */
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
let employee = employees[2];
let getEmployee23 = (idEmpleado) => {
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
        console.log("El salario de la ID "+idEmpleado+" es "+salario.salary);
        return salario.salary;
        },
        function(error) {console.log("ID no encontrada.");}  
    );
}
let getSalary23 = (employee) => {
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
        return obj.salary;
      },
      function(error) {console.log("ID no encontrada.");}  
  );
}
/* getEmployee(id)
    .then(getSalary(employee)) */

module.exports = {getEmployee23, getSalary23};
