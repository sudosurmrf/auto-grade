import { configureStore } from '@reduxjs/toolkit';
import graderApi from './services/graderApi';

const store = configureStore({
  reducer: {
    [graderApi.reducerPath]: graderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(graderApi.middleware),
});

export default store;