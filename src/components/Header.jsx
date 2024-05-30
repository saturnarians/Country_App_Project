import {  IoMoonSharp } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const Header = () => {
  const {theme,toggleTheme}=useContext(ThemeContext)

  return (
    
    <header className={`w-full  flex justify-between ${theme=='light'?'bg-white': 'bg-darkBlue'}`}>
      <h1 className={`text-lg font-bold text-${theme==='light'?'lightModeText':'white'} m-2 `}>Where in the world?</h1>
      <div onClick={toggleTheme} className=" cursor-pointer m-2">
        {
          theme ==='light'?
          <span className="flex items-center gap-2 text-lightModeText "> <span> Dark Mode</span> < IoMoonSharp /> </span>
          :<span className="flex items-center gap-2 text-white "> <span>Light Mode</span> <MdSunny  />  </span> 
        }
        
      </div>
    </header>
    
  )
}

export default Header