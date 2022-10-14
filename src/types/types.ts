export interface ErrorResponse extends Error {
  response?: {
    data: {
      message: string;
      // type?: ErrorType;
    };
  };
  message: string;
  // type?: ErrorType;
}

export function assertIsError(error: unknown): asserts error is Error {
  if (!(error instanceof Error)) {
    throw error;
  }
}

export interface RequestsOptions {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  page?: number;
}

export interface Peoples {
  count: number;
  next: string;
  previous?: string;
  results: People[];
}

export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created?: Date;
  edited?: Date;
  url: string;
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  films: string[];
  residents: string[];
  created?: Date;
  edited?: Date;
  url: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created?: Date;
  edited?: Date;
  url: string;
}

export interface ParamsPayload {
  page?: number;
}
