import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const data = await response.json();
    return data;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    reserveRocketAction: (state, action) => {
      const id = action.payload;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets: updatedRockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        rockets: action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          flickr_images: rocket.flickr_images[0],
          reserved: false,
        })),
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }));
  },
});

export const { reserveRocketAction } = rocketsSlice.actions;
export default rocketsSlice.reducer;
