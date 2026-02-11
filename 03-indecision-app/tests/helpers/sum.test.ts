
import { describe, expect, test } from 'vitest'
import { addArray, suma } from '../../src/helpers/sum';

describe('Group 1: add function', () => {

    
    test('adds 1 + 2 to equal 3', () => {
        //expect(suma(1,2)).toBe(3);
        // Preparacion
        const a = 1;
        const b = 3;
        // Estimulo
        const result = suma(a, b);
        // Esperado
        expect(result).toBe(a + b);
    });
    
})

describe('Group 2: add function', () => {

    test('should return 0 if the array is empty', () =>{
        const numberArray = [];
        const result = addArray(numberArray);
        expect(result).toBe(0);
    });
    
    test('should return the value of add array', () =>{
        const numberArray = [9,8,7];
        const result = addArray(numberArray);
        expect(result).toBe(25);
    });
    
    test('adds val[1] + val[2] to equal val[3]', () => {
        // Preparacion
        const arreglo = [1,2,3,4];
        const resultado2 = [3,4];
        // Estimulo
        const result = addArray(arreglo);
        console.log({result});
        // Espera
        expect(result).toBe(10);
    });

});
