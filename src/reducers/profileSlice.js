import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender: "",
    weight: [{ id: 1, weight: 0, date: "åååå-mm-dd" }],
    height: 0,
    age: 0,
    activityLevel: 1.2,
    goal: 0,
    tdee: 0,
    birthDate: "",
  }

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addWeight: (state, action) => {
      const newWeight = {
        id: state.weight.length + 1,
        weight: action.payload.weight,
        date: action.payload.date,
      };
      state.weight.push(newWeight);
    },
    displayWeight: (state, action) => {
      state.weight = action.payload;
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
  displayWeight,
  setGender,
  setWeight,
  setHeight,
  setAge,
  setActivityLevel,
  setGoal,
  setTDEE,
  setBirthDate,
} = profileSlice.actions;

export const selectTDEE = (state) => state.profile.tdee;

export default profileSlice.reducer;
