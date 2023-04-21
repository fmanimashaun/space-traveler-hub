import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from 'features/rockets/rocketsSlice';
import missionsReducer from 'features/missions/missionsSlice';

const rootReducer = {
  rockets: rocketsReducer,
  missions: missionsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
