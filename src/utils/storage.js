// src/storage/storage.js

export const loadState = () => {
  try {
    const mealLogs = JSON.parse(localStorage.getItem("mealLogs")) || [];
    const profile = JSON.parse(localStorage.getItem("profile")) || {
      gender: "male",
      weight: [/* { id: 1, weight: 0, date: "åååå-mm-dd" } */],
      height: 0,
      age: 0,
      activityLevel: 1.2,
      goal: 0,
      tdee: 0,
      birthDate: "",
    };

    return { meals: { mealLogs }, profile };
  } catch (err) {
    console.error("Error loading state:", err);
    return {
      meals: { mealLogs: [] },
      profile: {
        gender: "",
        weight: [{ id: 1, weight: 0, date: "åååå-mm-dd" }],
        height: 0,
        age: 0,
        activityLevel: 0,
        goal: 0,
        tdee: 0,
        birthDate: "",
      },
    };
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem(
      "mealLogs",
      JSON.stringify(state.meals?.mealLogs || [])
    );
    localStorage.setItem("profile", JSON.stringify(state.profile));
  } catch (err) {
    console.error("Error saving state:", err);
  }
};
