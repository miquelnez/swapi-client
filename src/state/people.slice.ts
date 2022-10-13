import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PeoplesService from './PeopleService';
import { assertIsError, People, Peoples, ParamsPayload } from '../types/types';

export const getPeople = createAsyncThunk(
  'people/getPeople',
  async ({ page }: ParamsPayload, thunkAPI) => {
    try {
      const response: Peoples = await PeoplesService.getPeople(page);
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
      const response: People = await PeoplesService.getPeopleId(id);
      return response;
    } catch (error) {
      assertIsError(error);
      const message: string = error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

interface PeopleState {
  people: People[];
  selectedPeople?: People;
}
const initialState: PeopleState = {
  people: [],
  selectedPeople: undefined,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPeople.fulfilled, (state, { payload }) => {
      state.selectedPeople = undefined;
      state.people = payload.results;
    });
    builder.addCase(getPeopleId.fulfilled, (state, { payload }) => {
      state.selectedPeople = payload;
    });
    // TODO: rejecteds
  },
});
export const { reducer } = peopleSlice;
