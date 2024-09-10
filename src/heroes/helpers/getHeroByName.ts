import { heroes } from '../data/heroes';
import { Hero } from '../typings/heroes';

export const getHeroByName = (name: string): Hero[] => {
  if (!name) {
    return [];
  }
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name.toLowerCase().trim()),
  );
};
