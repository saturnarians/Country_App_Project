import './App.css'
import CountryDetails from './components/CountryDetails'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { useContext,useState } from "react";
import { ThemeContext } from "./context/ThemeContext";


function App() {
  const {theme}=useContext(ThemeContext)
  const [searchParams, setSearchParams] = useState({ query: '', continent: '' });
  return (
    <>
  <div className={`${ theme==='light'?'bg-white':'bg-darkBlue' }  flex flex-col justify-center items-center p-[1rem] `}>
    <Header/>
  </div>

  <div className={`${ theme==='light'?'bg-veryLightGray':'bg-veryDarkBlue' } flex flex-col justify-center items-center p-[1rem]`}>
    <SearchBar onSearch={setSearchParams} />
    <CountryDetails query={searchParams.query} continent={searchParams.continent} /> 
    
  </div>
  </>
  
  
  )
}

export default App