
interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Iroman',
};

console.log(person.name);
console.log(person.age);

const {age, codeName, power = 'No tiene poder'} = person; // puede ser objeto o arreglo 
console.log({age, codeName, power});

export const person2: Hero = {
    name: 'Peter',
    age: 35,
    codeName: 'Spiderman',
    power: 'money'
};

interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    newPower?: string;

};

const createHero = ({ name, age, codeName, newPower }: CreateHeroArgs) => ({
    id: '112233',
    name: name,
    age: age,
    codeName: codeName,
    power: newPower ?? 'Sin poder',
});

console.log(createHero(person2));