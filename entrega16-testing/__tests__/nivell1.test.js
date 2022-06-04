const {sumar, restar, multiplicar, dividir} = require('../app/1_operaciones');
const {getEmployee, getSalary} = require('../app/2_asyncawait11');
const {fetchingN2E1, funcionN2E1} = require('../app/3_asyncawait21');
const {getEmployee23, getSalary23} = require('../app/4_promises23');

//Nivell 1: 1_operaciones.js
test('El resultado de 1 + 2 es 3', () => {
  expect(sumar(1, 2)).toBe(3);
});

test('El resultado de 2 - 1 es 1', () => {
  expect(restar(3, 1)).toBe(2);
});

test('El resultado de 3 x 2 es 6', () => {
  expect(multiplicar(3, 2)).toBe(6);
});

test('El resultado de 6 / 2 es 3', () => {
  expect(dividir(6, 2)).toBe(3);
});

//Segundo apartado: 2_asyncawait11.js
test('El salario es de 4000', () => {
    return getEmployee(1).then(data => {
      expect(data).toEqual(4000);
    });
  });

  test('El salario es de 1000', () => {
    return getSalary({id: 2, name: 'Bill Gates'}).then(data => {
      expect(data).toEqual(1000);
    });
  });

//Tercer apartado: 3_asyncawait21.js
test('El dato es "Ok"', async () => {
  return fetchingN2E1()
  .then(value => funcionN2E1(value))
  .then(value => expect(value).toBe("Ok"))
});
//Cuarto apartado: 4_promises23.js
test('El salario es 4000', async () => {
  return getSalary23({id: 1, name: 'Linux Torvalds'})
  .then(getEmployee23(1))
  .then(value => expect(value).toBe(4000))
}); 

//Quinto apartado: 3_asyncawait21.js
it('Jest Fake Timer', () => { 
  jest.useFakeTimers()
  const mockCallback = jest.fn()
  fetchingN2E1(mockCallback)
  jest.advanceTimersByTime(1000)
  expect(mockCallback).toHaveBeenCalledTimes(0)
})