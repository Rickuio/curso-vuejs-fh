import heroesPersonalizados, { type Owner } from "../data/heroes";

console.log(heroesPersonalizados);

export const getHeroById = (id: number) => {
   //return heroesPersonalizados.find(hero => hero.id === id) ?? {};
   return heroesPersonalizados.find(hero => hero.id === id);
}

console.log( getHeroById(3));

export const getHeroesByOwner = (propietario: Owner) => {
    return heroesPersonalizados.filter(hero => hero.owner == propietario) ?? {};
}

console.log(getHeroesByOwner('DC'));