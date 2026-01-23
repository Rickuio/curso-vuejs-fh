
const numberArray = [1,2,3,4,5];

numberArray.push(6);

const numberArray2 = [...numberArray];
numberArray2.push(Number('7'));

const numberArray3: (number|string)[] = [...numberArray2];
numberArray3.push('spread');

console.log(numberArray);
console.log(numberArray2);
console.log(numberArray3);

export {};
