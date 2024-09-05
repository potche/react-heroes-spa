export type Hero = {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
};

export enum Publisher {
  DC_COMICS = "DC Comics",
  Marvel_COMICS = "Marvel Comics",
}