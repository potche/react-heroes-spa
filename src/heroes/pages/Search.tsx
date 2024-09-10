import { HeroCard } from '../components';

import { useSearchParams } from 'react-router-dom';
import { useForm } from '../hooks';
import { getHeroByName } from '../helpers';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const q = searchParams.get('q') || '';
  const heroes = getHeroByName(q);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;
  const onSearchSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(searchText);
    setSearchParams({ q: searchText });
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a Hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}
          >
            Hero {q} not found
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
