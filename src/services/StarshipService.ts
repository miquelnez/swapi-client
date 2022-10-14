import request from './api-request';
import { Starship } from '../types/types';

export default class StarshipsService {
  static getStarshipId(id: number): Starship {
    return request({
      url: `starships/${id}`,
      method: 'GET',
    }) as unknown as Starship;
  }
}
