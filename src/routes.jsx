import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MealLog from "./pages/MealLog";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  

{
  path: "/",
  element: <App />,
  children: [
    {
      index:true,
      element: <Dashboard />,
    },
    {
      path: "/MealLog",
      element: <MealLog />,
      
    },
    {
      path: "/Profile",
      element: <Profile />,
    },
  ],
}

]);

export default router;