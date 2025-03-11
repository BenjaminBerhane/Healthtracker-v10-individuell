
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("mealLogs");
    if (!serializedState) return { mealLogs: [] };
    
    const parsedState = JSON.parse(serializedState);
    return { mealLogs: Array.isArray(parsedState) ? parsedState : [] };

  } catch (err) {
    console.error("Error loading state:", err);
    return { mealLogs: [] };
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.mealLogs);
    localStorage.setItem("mealLogs", serializedState);
  } catch (err) {
    console.error("Error saving state:", err);
  }
};
