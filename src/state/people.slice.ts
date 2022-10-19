import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getSearchableHomeworkd,
  getSearchableStarships,
} from '../helpers/get-homeworlds-starships';
import SWService from '../services/SWService';
import {
  assertIsError,
  People,
  Peoples,
  ParamsPayload,
  Planet,
} from '../types/types';
import { PlanetState } from './planets.slice';
import { RootState } from './store';

export const getPeople = createAsyncThunk(
  'people/getPeople',
  async ({ page }: ParamsPayload, thunkAPI) => {
    try {
      const response: Peoples = await SWService.getPeople(page);

      console.log('peoples', response);
      return response;
    } catch (error) {
      assertIsError(error);
      const message: string = error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPeopleId = createAsyncThunk(
  'people/getPeopleId',
  async (id: number, thunkAPI) => {
    try {
      const response: People = await SWService.getPeopleId(id);
      return response;
    } catch (error) {
      assertIsError(error);
      const message: string = error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const makePeopleSearchable = createAsyncThunk<
  People[],
  void,
  { state: RootState }
>('people/makePeopleSearchable', async (_, { getState }) => {
  // const { planet } = getState() as { planet: PlanetState };
  const { planets } = getState();
  const { starships } = getState();
  const { people } = getState();

  // do not process again
  if (people.searchable) {
    return people.people;
  }

  let clonedPeople = [...people.people];
  clonedPeople = clonedPeople.map(person => ({
    ...person,
    homeworldSearchable: getSearchableHomeworkd(person, planets.planets),
  }));

  clonedPeople = clonedPeople.map(person => ({
    ...person,
    starshipsSearchable: getSearchableStarships(person, starships.starships),
  }));

  console.log('MAKEPEOPLESEARCHABLE clonedPeople', clonedPeople);
  return clonedPeople;
});

interface PeopleState {
  people: People[];
  selectedPeople?: People;
  loading: boolean;
  error: boolean;
  searchable: boolean;
}
const initialState: PeopleState = {
  people: [],
  selectedPeople: undefined,
  loading: false,
  error: false,
  searchable: false,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPeople.pending, state => {
      state.selectedPeople = undefined;
      state.people = [];
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getPeople.fulfilled, (state, { payload }) => {
      state.selectedPeople = undefined;
      state.people = payload.results;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getPeople.rejected, state => {
      state.selectedPeople = undefined;
      state.people = [];
      state.loading = false;
      state.error = true;
    });
    builder.addCase(getPeopleId.pending, state => {
      state.selectedPeople = undefined;
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getPeopleId.fulfilled, (state, { payload }) => {
      state.selectedPeople = payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getPeopleId.rejected, state => {
      state.selectedPeople = undefined;
      state.loading = false;
      state.error = true;
    });
    // builder.addCase(makePeopleSearchable.fulfilled, (state, { payload }) => {
    builder.addCase(makePeopleSearchable.pending, state => {
      state.searchable = false;
      state.loading = true;
      state.error = false;
    });
    builder.addCase(makePeopleSearchable.fulfilled, (state, { payload }) => {
      state.people = payload;
      state.searchable = true;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(makePeopleSearchable.rejected, state => {
      state.searchable = false;
      state.loading = false;
      state.error = true;
    });
  },
});
export const { reducer } = peopleSlice;
