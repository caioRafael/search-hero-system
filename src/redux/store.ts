
import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './slice/heroSlice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
