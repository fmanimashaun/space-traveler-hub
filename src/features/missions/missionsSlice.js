import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/mission';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(URL);
      const missions = response.data.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        manufacturers: mission.manufacturers,
        payload_ids: mission.payload_ids,
        wikipedia: mission.wikipedia,
        website: mission.website,
        twitter: mission.twitter,
        description: mission.description,
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
        (m) => m.id === action.payload,
      );
      if (mission) {
        mission.reserved = true;
        state.reservedMissions.push(mission);
      }
    },
    leaveMission: (state, action) => {
      const missionIndex = state.missionList.findIndex(
        (m) => m.id === action.payload,
      );
      if (missionIndex >= 0) {
        const updatedMission = {
          ...state.missionList[missionIndex],
          reserved: false,
        };
        const updatedMissionList = [
          ...state.missionList.slice(0, missionIndex),
          updatedMission,
          ...state.missionList.slice(missionIndex + 1),
        ];
        const updatedReservedMissions = state.reservedMissions.filter(
          (m) => m.id !== action.payload,
        );
        return {
          ...state,
          missionList: updatedMissionList,
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
