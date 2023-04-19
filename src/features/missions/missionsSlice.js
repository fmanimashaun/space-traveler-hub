import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  missionList: [],
  isLoading: false,
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const mission = state.missions.find(
        (m) => m.mission_id === action.payload,
      );
      if (mission) {
        mission.reserved = true;
      }
    },
    leaveMission: (state, action) => {
      const mission = state.missions.find(
        (m) => m.mission_id === action.payload,
      );
      if (mission) {
        mission.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        missionList: action.payload,
      }))
      .addCase(fetchMissions.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
