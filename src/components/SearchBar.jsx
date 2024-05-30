import { CiSearch } from "react-icons/ci";
import { useContext, useState} from "react";
import { ThemeContext } from "../context/ThemeContext";
import PropTypes from 'prop-types';
// import axios from 'axios';

const SearchBar = ({onSearch }) => {

  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('');
  const {theme}=useContext(ThemeContext)

  const handleSearch = () => {
    onSearch({ query, continent });
  };

  const handleContinentChange = (event) => {
    setContinent(event.target.value);
    onSearch({ query, continent: event.target.value });
  };

  return(
    <div className={`w-full flex justify-between ${theme=='light'?'bg-veryLightGray': 'bg-veryDarkBlue'}`}>
      <div className="w-full flex flex-col justify-center items-center gap-4 py-4 px-4">
    <form onSubmit={handleSearch} className={`w-full md:w-[60%] lg:w-[45%] flex justify-between items-right ${theme=='light'?'bg-white': 'bg-darkBlue'} px-2 py-2 rounded-md mt-8`} >
      <div className="flex items-center gap-1 flex-1 ">
       <strong><CiSearch className=" text-darkGray text-lg font-bold ml-2 mr-1" /> </strong>
        <input className={`w-full  border-0 ${theme==='light'? 'text-lightModeText bg-white':'text-white bg-darkBlue'}  focus:outline-none text-sm `} 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by country name or capital" />
      </div>
    </form>
    </div>

    <select
        value={continent}
        onChange={handleContinentChange}
        className="border rounded px-4 py-2"
      >
        <option value="">Select a continent</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  
};


export default SearchBar;