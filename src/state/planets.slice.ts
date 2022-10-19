import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SWService from '../services/SWService';
import { assertIsError, Planet } from '../types/types';

export const getPlanetId = createAsyncThunk(
  'planet/getPlanetId',
  async (id: number, thunkAPI) => {
    try {
      const response: Planet = await SWService.getPlanetId(id);
      return response;
    } catch (error) {
      assertIsError(error);
      const message: string = error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export interface PlanetState {
  planets: Planet[];
  selectedPlanet?: Planet;
  loading: boolean;
  error: boolean;
}
const initialState: PlanetState = {
  planets: [],
  selectedPlanet: undefined,
  loading: false,
  error: false,
};

const planetsSlice = createSlice({
  name: 'planet',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPlanetId.pending, state => {
      state.selectedPlanet = undefined;
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getPlanetId.fulfilled, (state, { payload }) => {
      state.selectedPlanet = payload;
      state.loading = false;
      state.error = false;
      state.planets = [...state.planets, payload];
    });
    builder.addCase(getPlanetId.rejected, state => {
      state.selectedPlanet = undefined;
      state.loading = false;
      state.error = true;
    });
  },
});
export const { reducer } = planetsSlice;
