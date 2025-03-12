import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileSlice";
import mealReducer from "./reducers/mealSlice";
import { loadState, saveState } from "./utils/storage";

// Ladda data från localStorage
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    profile: profileReducer,
    meals: mealReducer,
  },
  preloadedState,
});

// Spara till localStorage vid ändringar
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
