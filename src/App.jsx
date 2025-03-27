import { Outlet} from 'react-router-dom' // fixed import, changed from react-router to react-router-dom
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import DarkMode from './components/DarkMode'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark': ''}`}>
    <Header />
    {console.log("Outlet should render below")}
    <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <Outlet />
    <Footer />
    </div>

  ) 
}

export default App
