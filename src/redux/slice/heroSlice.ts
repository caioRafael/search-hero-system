import { createSlice } from '@reduxjs/toolkit';
import { getNewHero, Hero } from '../../models/Hero';

const initialState: Hero = {
  ...getNewHero(),
  id: "1"
}

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {}
})

export default heroSlice.reducer;