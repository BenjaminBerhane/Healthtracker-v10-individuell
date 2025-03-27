import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
const DarkMode = ({ darkMode,toggleDarkMode }) => {
  return (
    <button 
      className="fixed top-45 right-4 w-13 h-13 bg-neutral-700 dark:bg-white rounded-full text-white dark:text-black font-semibold z-[999]"
      onClick={toggleDarkMode}
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="2x" />
    </button>
  )
}

export default DarkMode

