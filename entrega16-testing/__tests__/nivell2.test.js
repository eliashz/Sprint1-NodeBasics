/* Crea un mock que comprovi les crides al constructor de la 
classe Persona i al seu mètode decirNombre en l'exercici 
Classes & Arrow Functions - Nivell 2 Exercici 2 */

import Persona from '../app/2_1_classesarrow22';

const mockDirNom = jest.fn();
jest.mock('../app/2_1_classesarrow22', () => {
  return jest.fn().mockImplementation(() => {
    return {dirNom: mockDirNom};
  });
});

beforeEach(() => {
  Persona.mockClear();
  mockDirNom.mockClear();
});

it('Se podría crear un new() de Persona.', () => {
  const maynard = new Persona();
  // Ensure constructor created the object:
  expect(maynard).toBeTruthy();
});

it('Comprobar si se llama al constructor de la clase.', () => {
  const maynard = new Persona();
  expect(Persona).toHaveBeenCalledTimes(1);
});

it('Comprobar si se llama al método de la clase instanciada.', () => {
  const maynard = new Persona();
  maynard.dirNom();
  expect(mockDirNom.mock.calls[0][0]).toEqual();
});

//Verifica mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1.

import Fruta from '../app/2_2_classesarrow31';

const mockSay = jest.fn();
jest.mock('../app/2_2_classesarrow31', () => {
  return jest.fn().mockImplementation(() => {
    return {say: mockSay};
  });
});

beforeEach(() => {
  Fruta.mockClear();
  mockSay.mockClear();
});

it('Se podría crear un new() de Fruta.', () => {
  const manzana = new Fruta();
  // Ensure constructor created the object:
  expect(manzana).toBeTruthy();
});

it('Comprobar si se llama al constructor de la clase.', () => {
  const manzana = new Fruta();
  expect(Fruta).toHaveBeenCalledTimes(1);
});

it('Comprobar si se llama al método de la clase instanciada.', () => {
  const manzana = new Fruta();
  manzana.say();
  expect(mockSay.mock.calls[0][0]).toEqual();
});