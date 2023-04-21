import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from 'features/rockets/rocketsSlice';
import missionsReducer from 'features/missions/missionsSlice';

const rootReducer = {
  rockets: rocketsReducer,
  missions: missionsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk, logger],
});

export default store;
