import LRU from 'lru-cache';
import request from './api-request';
import { People, Peoples, Planet, Starship } from '../types/types';
// import { getId } from '../helpers/get-id';

const cache = new LRU({ max: 50, ttl: 1000 * 60 * 60 });

export default class SWService {
  static getPeople(page?: number) {
    if (cache.has('peoples')) {
      console.log('CACHED: people/ ');
      return cache.get('peoples') as Peoples;
    }
    const result = request({
      url: `people/`,
      method: 'GET',
      page,
    }) as unknown as Peoples;
    cache.set('peoples', result);
    return result;
  }

  static getPeopleId(id: number): People {
    if (cache.has(`people/${id}`)) {
      console.log(`CACHED: people/${id}`);
      const person = cache.get(id) as People;
      return person;
    }
    const result = request({
      url: `people/${id}`,
      method: 'GET',
    });
    cache.set(`people/${id}`, result);
    return result as unknown as People;
  }

  static getPlanetId(id: number): Planet {
    const cacheKey = `planets/${id}`;
    if (cache.has(cacheKey)) {
      console.log(`CACHED: ${cacheKey}`);
      return cache.get(cacheKey) as Planet;
    }
    console.log(`NOTCACHED ${cacheKey}`);
    const result = request({
      url: `planets/${id}`,
      method: 'GET',
    }).then(data => ({
      ...data,
      searchable: { id, name: data.name, group: 'planets' },
    }));
    cache.set(cacheKey, result);
    return result as unknown as Planet;
  }

  static getStarshipId(id: number): Starship {
    const cacheKey = `starships/${id}`;
    if (cache.has(cacheKey)) {
      console.log(`CACHED: ${cacheKey}`);
      return cache.get(cacheKey) as Starship;
    }
    console.log(`NOTCACHED ${cacheKey}`);
    const result = request({
      url: `starships/${id}`,
      method: 'GET',
    }).then(data => ({
      ...data,
      searchable: { id, name: data.name, group: 'starships' },
    }));
    cache.set(cacheKey, result);
    return result as unknown as Starship;
  }

  static getAllHomeworlds(people: People[]) {
    console.log('allPeople', people);
  }
}
