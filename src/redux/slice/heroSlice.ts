import { createSlice } from '@reduxjs/toolkit';
import { getNewHero, Hero } from '../../models/Hero';
import { RootState } from '../store';

const initialState: Hero = {
  ...getNewHero(),
  id: "1"
}

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    nextIdHero: (state) => {
      if (!!parseInt(state.id) && parseInt(state.id) <= 731) {
        const id = parseInt(state.id);

        state.id = id + 1 + "";
      }
    },
  }
});

export const {
  nextIdHero,
} = heroSlice.actions;

export const selectHero = (state: RootState) => state.hero;

export default heroSlice.reducer;