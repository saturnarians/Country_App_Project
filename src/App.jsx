import './App.css'
import CountryDetails from './components/CountryDetails'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { useContext,useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryDetail from './components/CountryDetail'


function App() {
  const {theme}=useContext(ThemeContext)
  const [searchParams, setSearchParams] = useState({ query: '', continent: '' });

  return (
    <Router>
    <>
  <div className={`w-full ${ theme==='light'?'bg-white':'bg-darkBlue' } p-[1rem] `}>
    <Header/>
    <SearchBar onSearch={setSearchParams} />
    <Routes>
          <Route path="/" element={<CountryDetails query={searchParams.query} continent={searchParams.continent} /> } />
          <Route path="/country/:code" element={<CountryDetail />} />
    </Routes>
    
  </div>
  </>
  </Router>
  
  )
}

export default App