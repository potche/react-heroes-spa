import { Link } from "react-router-dom";
import { Hero } from "../typings/heroes";

export const HeroCard = ({ hero }: { hero: Hero }) => {
  const imageUrl = `/assets/heroes/${hero.id}.jpg`;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img" src={imageUrl} alt={hero.superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text">{hero.alter_ego}</p>
              {hero.alter_ego !== hero.characters && <p>{hero.characters}</p>}
              <p className="card-text">
                <small className="card-muted">{hero.first_appearance}</small>
              </p>
              <Link to={`/hero/${hero.id}`}>mas..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
