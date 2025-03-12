import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mealLogs: [],
};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    addMeal: (state, action) => {
      state.mealLogs.push(action.payload);
    },
    updateMeal: (state, action) => {
      const index = state.mealLogs.findIndex(m => m.id === action.payload.id);
      if (index !== -1) {
        state.mealLogs[index] = action.payload;
      }
    },
  },
});

export const { addMeal, updateMeal } = mealSlice.actions;
export default mealSlice.reducer;
