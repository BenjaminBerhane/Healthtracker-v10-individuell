// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profileSlice';
import mealReducer from "./reducers/mealSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("mealLogs");
    if (serializedState === null) return { meals: { mealLogs: [] } };
    
    const parsedState = JSON.parse(serializedState);
    // Returnera staten i rätt format
    return { meals: { mealLogs: Array.isArray(parsedState) ? parsedState : [] } };

  } catch (err) {
    console.error("Error loading state:", err);
    return { meals: { mealLogs: [] } };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.meals.mealLogs);
    localStorage.setItem("mealLogs", serializedState);
  } catch (err) {
    console.error("Error saving state:", err);
  }
};

// Ladda initial state från localStorage
const preloadedState = loadState();


const store = configureStore({
  reducer: {
    profile: profileReducer,
    meals: mealReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState().meals);
});

export default store;