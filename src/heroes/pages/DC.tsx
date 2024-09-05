import { HeroList } from "../components";
import { Publisher } from "../typings/heroes";

export const DC = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <HeroList publisher={Publisher.DC_COMICS} />
    </>
  );
};
