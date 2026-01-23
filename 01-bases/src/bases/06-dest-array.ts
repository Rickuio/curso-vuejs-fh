
const character = ['goku', 'vegueta', 'trunks', 'goten'];

export const [ ,,t, g2, g3 = 'Yamoshi' ] = character;
console.log({g2,t, g3});

const returnArray = () => {
    return [33, 'ABC'] as const;
}

const [num, str] = returnArray();
console.log(num * 3, str.toLocaleLowerCase());
