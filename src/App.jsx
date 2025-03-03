import { Outlet} from 'react-router'
import './App.css'

function App() {

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
