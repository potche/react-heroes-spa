import { HeroList } from "../components";
import { Publisher } from "../typings/heroes";

export const Marvel = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />
      <HeroList publisher={Publisher.Marvel_COMICS} />
    </>
  );
};
