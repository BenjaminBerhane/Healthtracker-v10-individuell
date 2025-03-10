import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MealLog from "./pages/MealLog";
import ProfileForm from "./pages/ProfileForm";
import ProfileCard from "./pages/ProfileCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       {
        index: true,
        element: <Dashboard />,
      }, 
      {
        path: "mealLog",
        element: <MealLog />,
      },
      {
        path: "profileform",
        element: <ProfileForm />,
      },
      {
        path: "profilecard",
        element: <ProfileCard />,
      },
    ],
  },
]);

export default router;
