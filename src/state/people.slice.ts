import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PeopleService from '../services/PeopleService';
import { assertIsError, People, Peoples, ParamsPayload } from '../types/types';

export const getPeople = createAsyncThunk(
  'people/getPeople',
  async ({ page }: ParamsPayload, thunkAPI) => {
    try {
      const response: Peoples = await PeopleService.getPeople(page);
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
      const response: People = await PeopleService.getPeopleId(id);
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
  loading: boolean;
  error: boolean;
}
const initialState: PeopleState = {
  people: [],
  selectedPeople: undefined,
  loading: false,
  error: false,
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
  },
});
export const { reducer } = peopleSlice;
