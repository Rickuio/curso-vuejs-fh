import heroesPersonalizados, { owners } from "../data/heroes";

console.log(owners, heroesPersonalizados);

export const getHeroById = (id: number) => {
   return heroesPersonalizados.find(hero => hero.id === id) ?? {};
}

console.log( getHeroById(3));

export const getHeroesByOwner = (propietario: string) => {
    return heroesPersonalizados.filter(hero => hero.owner == propietario) ?? {};
}

console.log(getHeroesByOwner('DC'));