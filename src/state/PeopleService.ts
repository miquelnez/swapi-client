import request from './api-request';
import { People, Peoples } from '../types/types';

export default class PeoplesService {
  static getPeoples(page?: number) {
    return request({
      url: `people/`,
      method: 'GET',
      page,
    }) as unknown as Peoples;
  }

  static getPeopleId(id: number): People {
    return request({
      url: `people/${id}`,
      method: 'GET',
    }) as unknown as People;
  }
}
