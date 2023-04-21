import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rocketsReducer } from '../pages/RocketSlice';

const rootReducer = {
  rockets: rocketsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
