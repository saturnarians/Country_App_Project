import { CiSearch } from "react-icons/ci";
import { useContext, useState} from "react";
import { ThemeContext } from "../context/ThemeContext";
import PropTypes from 'prop-types';
// import axios from 'axios';

const SearchBar = ({onSearch }) => {

  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('');
  const {theme}=useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    onSearch({ query, continent });
  };

  const handleOptionClick = (selectedContinent) => {
    setContinent(selectedContinent);
    onSearch({ query, continent: selectedContinent });
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return(
    <>
    <div className={`w-full flex justify-between ${theme=='light'?'bg-veryLightGray': 'bg-veryDarkBlue'}`}>
    <div className="w-full flex flex-col justify-center gap-4 py-4 px-4">
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
     
      <div className={`relative inline-block text-center ${theme=='light'?'bg-veryLightGray': 'bg-veryDarkBlue'} mr-5 mt-12`} >
        <div>
          <button
            onClick={toggleDropdown}
            type="button"
            className={`inline-flex w-48 justify-center gap-x-1.5 rounded-md 
            ${theme==='light'? 'text-lightModeText bg-white':'text-white bg-darkBlue'} 
            px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 `}
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            {continent ? continent : 'Filter by Region'}
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md
             ${theme==='light'? 'text-lightModeText bg-white':'text-white bg-darkBlue'} shadow-lg ring-0 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <button
                onClick={() => handleOptionClick('Africa')}
                className="text-gray-700 block px-4 py-2 text-sm w-full text-center"
                role="menuitem"
                tabIndex="-1"
              >
                Africa
              </button>
              <button
                onClick={() => handleOptionClick('Americas')}
                className="text-gray-700 block px-4 py-2 text-sm w-full text-center"
                role="menuitem"
                tabIndex="-1"
              >
                Americas
              </button>
              <button
                onClick={() => handleOptionClick('Asia')}
                className="text-gray-700 block px-4 py-2 text-sm w-full text-center"
                role="menuitem"
                tabIndex="-1"
              >
                Asia
              </button>
              <button
                onClick={() => handleOptionClick('Europe')}
                className="text-gray-700 block px-4 py-2 text-sm w-full text-center"
                role="menuitem"
                tabIndex="-1"
              >
                Europe
              </button>
              <button
                onClick={() => handleOptionClick('Oceania')}
                className="text-gray-700 block px-4 py-2 text-sm w-full text-center"
                role="menuitem"
                tabIndex="-1"
              >
                Oceania
              </button>
            </div>
          </div>
        )}
      </div>


    </div>
</>

  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  
};


export default SearchBar