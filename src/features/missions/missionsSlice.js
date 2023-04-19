import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(URL);
      const missions = response.data.map((mission) => ({
        ...mission,
        reserved: false,
      }));
      return missions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  missionList: [],
  reservedMissions: [],
  isLoading: false,
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const mission = state.missionList.find(
        (m) => m.mission_id === action.payload,
      );
      console.log(mission);
      if (mission) {
        mission.reserved = true;
        state.reservedMissions.push(mission);
      }
    },
    leaveMission: (state, action) => {
      const mission = state.missionList.find(
        (m) => m.mission_id === action.payload,
      );
      if (mission) {
        const index = action.payload;
        const updatedMissions = [
          ...state.missionList.slice(0, index),
          { ...mission, reserved: false },
          ...state.missionList.slice(index + 1),
        ];
        const updatedReservedMissions = state.reservedMissions.filter(
          (m) => m.mission_id !== action.payload,
        );

        return {
          ...state,
          missionList: updatedMissions,
          reservedMissions: updatedReservedMissions,
        };
      }

      return state;
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
