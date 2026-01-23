
export const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 512234,
        lat: 14.5544,
        lng: 34.4545
    }
}; //as const;

const person2 = person;
person2.lastName = 'Parker';

const person3 = {...person2};
person3.lastName = 'Anchaluisa';

const person4 = structuredClone(person3);
person4.address.city = 'LA';

console.log({person});
console.log({person2});
console.log({person3});
console.log({person4});