/* Nivell 1
Crea els tests corresponents per verificar el funcionament de 
l'exercici Async / Await Nivell 1 - Exercici 1 */ 
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
            let salario = salaries.find(data => data.id === idEmpleado);
            let mensaje = "El salario de "+nombre.name+" es de "+salario.salary+" (N1E1)";
            resolve(salario.salary);
        }else{
            reject("ID "+idEmpleado+" no encontrada (N1E1)");
        }
    })
}
getEmployee(id)
    .then(value => console.log(value))
    .catch(error => console.log(error));
let getSalary = (employee) => {
    return new Promise ((resolve, reject) => {
        let salarioEmpleado = salaries.find(data => data.id === employee.id);
        if (salarioEmpleado){
            resolve(salarioEmpleado.salary);
        }else{
            reject("ID no encontrada (N1E1)");
        }
    })
}
getSalary(employee)
    .then(value => console.log("El salario es de "+value+" (N1E1)"))
    .catch(error => console.log(error));
module.exports = {getEmployee, getSalary};