import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

console.log('inicio');

new Promise( ( resolve, reject )=> {
    console.log('Cuerpo de la promesa');
    setTimeout( () => {
        console.log('Estas amigo 1');
        console.log('Estas amigo 2');
        reject('No cumplió :(');
        resolve('Mi amigo cumplió');
        console.log('Estas amigo 3');
    }, 2000);
})
    .then((message) =>console.log(message))
    .catch(errorMessage => console.log(errorMessage))
    .finally(() => console.log('Fin de la promesa'));


const getHeroByIdAsync = (id: number): Promise<Hero> => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            const hero = getHeroById(id);
            if (hero) {
                resolve(hero);
            } else {
                reject(`Heroe no encontrado #${id}`);
            } 
        }, 1500)
    });
}

getHeroByIdAsync(1)
    .then( h => console.log('El nombre del heroes es', h.name))
    .catch( alert );

const getHeroByIdLine = (id:number): Promise<Hero> => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const hero = getHeroById(id);
            hero ? resolve(hero) : reject(`No encontrado #${id}`);
        }, 1800);
    });
};

getHeroByIdLine(200)
    .then( h => console.log('El nombre del heroes es', h.name))
    .catch( err => console.log('Error del catch:', err) );

console.log('fin');