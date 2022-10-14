import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StarshipsService from '../services/StarshipsService';
import { assertIsError, Starship } from '../types/types';

export const getStarshipId = createAsyncThunk(
  'starship/getStarshipId',
  async (id: number, thunkAPI) => {
    try {
      const response: Starship = await StarshipsService.getStarshipId(id);
      return response;
    } catch (error) {
      assertIsError(error);
      const message: string = error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

interface StarshipState {
  starships: Starship[];
  selectedStarship?: Starship;
  loading: boolean;
  error: boolean;
}
const initialState: StarshipState = {
  starships: [],
  selectedStarship: undefined,
  loading: false,
  error: false,
};

const starshipsSlice = createSlice({
  name: 'starship',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getStarshipId.pending, state => {
      state.selectedStarship = undefined;
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getStarshipId.fulfilled, (state, { payload }) => {
      state.selectedStarship = payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getStarshipId.rejected, state => {
      state.selectedStarship = undefined;
      state.loading = false;
      state.error = true;
    });
  },
});
export const { reducer } = starshipsSlice;
