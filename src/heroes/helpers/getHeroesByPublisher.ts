import { heroes } from "../data/heroes";
import { Hero } from "../typings/heroes";

export const getHeroesByPublisher = (publisher: string): Hero[] => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not valid publisher`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
