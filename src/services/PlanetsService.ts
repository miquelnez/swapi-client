import request from './api-request';
import { Planet } from '../types/types';

export default class PlanetsService {
  static getPlanetId(id: number): Planet {
    return request({
      url: `planets/${id}`,
      method: 'GET',
    }) as unknown as Planet;
  }
}
