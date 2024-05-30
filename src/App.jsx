import './App.css'
import CountryDetails from './components/CountryDetails'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
// import { UserContext } from './context/apiContext/UserContext'
function App() {
  const {theme}=useContext(ThemeContext)
  // const {userData}=useContext(UserContext)
  return (
    <>
  <div className={`${ theme==='light'?'bg-white':'bg-darkBlue' }  flex flex-col justify-center items-center p-[1rem] `}>
    <Header/>
  </div>

  <div className={`${ theme==='light'?'bg-veryLightGray':'bg-veryDarkBlue' } flex flex-col justify-center items-center p-[1rem]`}>
    <SearchBar/>
  
    
    {/* {userData?.id
    && } */}
     <CountryDetails/> 
    
  </div>
  </>
  
  
  )
}

export default App