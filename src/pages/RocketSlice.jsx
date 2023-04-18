import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const data = await response.json();
    return data;
  },
);

fetchRockets();

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
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
          flickr_images: rocket.flickr_images,
        })),
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }));
  },
});

export default rocketsSlice.reducer;
