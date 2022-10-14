import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PlanetsService from '../services/PlanetsService';
import { assertIsError, Planet } from '../types/types';

export const getPlanetId = createAsyncThunk(
  'planet/getPlanetId',
  async (id: number, thunkAPI) => {
    try {
      const response: Planet = await PlanetsService.getPlanetId(id);
      return response;
    } catch (error) {
      assertIsError(error);
      const message: string = error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

interface PlanetState {
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
    });
    builder.addCase(getPlanetId.rejected, state => {
      state.selectedPlanet = undefined;
      state.loading = false;
      state.error = true;
    });
  },
});
export const { reducer } = planetsSlice;
