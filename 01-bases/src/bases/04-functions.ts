
function greetPerson(name: string) {
    return `Hola, ${ name }`;
}

export const greetPersonArrow = (name: string) => {
     return `Hola, ${ name }`;
}

const greetPersonLine = (name: string) => `Hola, ${name}`;

const getUser = () => {
    return {
        uid: 'ABC-123',
        username: 'Tony001'
    }
}

const getUserLine = (id: string) => ({
    uid: id,
    username: 'Tony001'
});

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Rompe paredes',
    }
];

const hero = heroes.find((h) => h.id === 2);

console.log(greetPerson('Rick'));
console.log(greetPersonArrow('Peter'));
console.log(greetPersonLine('Parker'));
console.log(getUser());
console.log(getUserLine('XYZ-456'));
console.log(hero?.power?.toUpperCase());
