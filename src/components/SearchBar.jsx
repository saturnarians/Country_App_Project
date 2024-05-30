import { CiSearch } from "react-icons/ci";
import { useContext, useState,useEffect} from "react";
import { ThemeContext } from "../context/ThemeContext";
// import axios from 'axios';

const SearchBar = () => {
  // const [query, setQuery] = useState('');

  const {theme}=useContext(ThemeContext)

  const [searchData,setSearchData] =useState('')

  const handleInput =(e)=>{
    setSearchData(e.target.value)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(searchData=== ''){
      alert('Search for a country...')
    }else{
     await getUser(searchData)
     .then((result)=>  updateData(result))
     .finally(()=>console.log(userData)) 
    }
  }

  return(
    <div className={`w-full flex justify-between ${theme=='light'?'bg-veryLightGray': 'bg-veryDarkBlue'}`}>
      {/* <div className="w-full flex flex-col justify-center items-center gap-4 py-4 px-4"></div> */}
    <form onSubmit={handleSubmit} className={`w-full md:w-[60%] lg:w-[45%] flex justify-between items-right ${theme=='light'?'bg-white': 'bg-darkBlue'} px-2 py-2 rounded-md mt-8`} >


      <div className="flex items-center gap-1 flex-1 ">
       <strong><CiSearch className=" text-darkGray text-lg font-bold ml-2 mr-1" /> </strong>
        <input className={`w-full  border-0 ${theme==='light'? 'text-lightModeText bg-white':'text-white bg-darkBlue'}  focus:outline-none text-sm `} type="search" value={searchData} onChange={handleInput}  name="userName" placeholder="Search for a country..." />
      </div>
    </form>
    </div>
  )
}

export default SearchBar;