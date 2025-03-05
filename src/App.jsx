import { Outlet} from 'react-router-dom' // fixed import, changed from react-router to react-router-dom
import './App.css'
import mealData from './utils/mockData'
import { useEffect } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
  // Load mealData to localStorage
  localStorage.setItem("mealData", JSON.stringify(mealData));
  console.log("mealData added to local storage:", mealData);
}, []);

  return (
    <>
    <Header />
    <Navbar />
    {console.log("Outlet should render below")}
    <Outlet />
    <Footer />
    </>

  ) 
}

export default App
