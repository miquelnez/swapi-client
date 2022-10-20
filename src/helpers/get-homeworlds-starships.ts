import { People, Planet, SearchableStarship, Starship } from '../types/types';
import { getId } from './get-id';

export const getHomeworldsAndStarships = (people: People[]) => {
  const homeworlds = people.map(person => person.homeworld);
  const starships = people.map(person => person.starships).flat();

  return [...new Set([...homeworlds, ...starships])];
};

export const getHomeworldIds = (people: People[]) => {
  const homeworlds = people.map(person => getId(person.homeworld));
  // const starships = people.map(person => person.starships).flat();

  return [...new Set([...homeworlds])];
};

export const getStarshipsIds = (people: People[]) => {
  const starships = people.map(person => person.starships).flat();
  const starshipsIds = starships.map(starship => getId(starship));

  return [...new Set([...starshipsIds])];
};

export const getSearchableHomeworkd = (person: People, planets: Planet[]) => {
  const homeworld = planets.filter(planet => planet.url === person.homeworld);
  if (homeworld.length > 0) return homeworld[0].searchable;
  return undefined;
};

export const getSearchableStarships = (
  person: People,
  starships: Starship[]
) => {
  const personSearchableStarships: SearchableStarship[] = [];
  person.starships.forEach(ship => {
    const filtered = starships.filter(starship => starship.url === ship);
    if (filtered.length > 0)
      personSearchableStarships.push(
        filtered[0].searchable as SearchableStarship
      );
  });

  return personSearchableStarships;
};
