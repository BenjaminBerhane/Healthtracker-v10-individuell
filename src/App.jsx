import { Outlet} from 'react-router-dom' // fixed import, changed from react-router to react-router-dom
import './App.css'
import mealData from './utils/mockData'
import { useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  useEffect(() => {
  // Load mealData to localStorage
  localStorage.setItem("mealData", JSON.stringify(mealData));
  console.log("mealData added to local storage:", mealData);
}, []);

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    {console.log("Outlet should render below")}
    <Outlet />
    <Footer />
    </div>

  ) 
}

export default App
