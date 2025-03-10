// src/features/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    gender: '',
    weight: '',
    height: '',
    age: '',
    activityLevel: 1.2,
    goal: '-500',
    tdee: null,
  },
  reducers: {
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setActivityLevel: (state, action) => {
      state.activityLevel = action.payload;
    },
    setGoal: (state, action) => {
      state.goal = parseFloat(action.payload);
    },
    setTDEE: (state, action) => {
      state.tdee = action.payload;
    },
  },
});

export const {
  setGender,
  setWeight,
  setHeight,
  setAge,
  setActivityLevel,
  setGoal,
  setTDEE,
} = profileSlice.actions;

export default profileSlice.reducer;