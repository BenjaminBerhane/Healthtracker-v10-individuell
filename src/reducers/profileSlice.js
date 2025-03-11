import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    gender: 'male',
    weight: [{id: 1, weight: 140, date: "2025-03-11"}],
    height: 188,
    age: 47,
    activityLevel: 1.2,
    goal: 0,
    tdee: 0,
    birthDate: '1977-12-16',
  },
  reducers: {
    addWeight: (state, action) => {
      const newWeight = {
        id: state.weight.length + 1,
        weight: action.payload.weight,
        date: action.payload.date,
      };
      state.weight.push(newWeight);
    },
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
    setBirthDate: (state, action) => {
      state.birthDate = action.payload; 
    },
  },
});

// Exportera reducer och actions
export const {
  addWeight,
  setGender,
  setWeight,
  setHeight,
  setAge,
  setActivityLevel,
  setGoal,
  setTDEE,
  setBirthDate,
} = profileSlice.actions;

export default profileSlice.reducer;