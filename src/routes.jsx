import { createBrowserRouter } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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