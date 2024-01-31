import { useLocation } from 'react-router-dom';
import { HeroCard } from '../components';
// ! This importation make the test `debe de mostrar el login si no esta autenticado` in AppRouter.test.jsx fail
// import queryString from 'query-string';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const searchAlert =
    <div className="mt-5 bg-blue-100 p-5 rounded-lg text-blue-600 border border-blue-300/40 flex items-center gap-3 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <p className="font-light">Search a hero</p>
    </div>;

  const errorAlert =
    <div className="mt-5 bg-yellow-100 p-5 rounded-lg text-yellow-600 border border-yellow-300/40 flex items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
      <p className="font-light">There's no results with <span className="font-medium">{q}</span></p>
    </div>;

  return (
    <>
      <h1 className="text-3xl font-bold text-indigo-600">Results</h1>
      {(heroes.length !== 0) && <span className="text-md text-slate-600">{q}</span>}

      {
        (q === '') ? searchAlert : (heroes.length === 0) && errorAlert
      }

      <div className="flex gap-4 flex-wrap">
        {
          heroes.map(hero => (
            <HeroCard
              key={hero.id}
              id={hero.id}
              superhero={hero.superhero}
            />
          ))
        }
      </div>
    </>
  )
}
