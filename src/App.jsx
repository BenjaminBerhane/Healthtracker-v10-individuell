import { Outlet} from 'react-router'
import './App.css'
import mealData from './utils/mockData'

function App() {

  // Load mealData to localStorage
  localStorage.setItem("mealData", JSON.stringify(mealData))
  console.log("mealData added to local storage:", mealData);
  
  

  return (
    <>
    <Header />
    <Navbar />
    <Outlet />
    <Footer />
    </>

  ) 
}

export default App
