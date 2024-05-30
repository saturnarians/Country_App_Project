import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext";
import axios from 'axios';

 // Note: the empty deps array [] means
 // this useEffect will run once

const CountryDetails = () => {
    const {theme}=useContext(ThemeContext)

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(response.data);
            setLoading(false);
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        };
    
        fetchCountries();
      }, []);

      if (loading) return <div className="text-center mt-10">Loading...</div>;
      if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

      return (
  <div className="container mx-auto px-4 py-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {countries.map((country) => (
          <li key={country.cca3} className={`border shadow-lg ${theme=='light'?'bg-white': 'bg-darkBlue'}`}>
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              className="w-full h-40 object-cover mb-4"
            />
            <div className={`m-4 ${theme==='light'? 'text-darkGray bg-veryLightGray':'text-white bg-darkBlue'}`}>
            <div className="text-lg font-semibold pb-4">{country.name.common}</div>
            <div className="text-sm text-gray-600 pb-1">
              <strong>Population:</strong> {country.population.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 pb-1">
              <strong>Region:</strong> {country.region}
            </div>
            <div className="text-sm text-gray-600 pb-1">
              <strong>Capital:</strong> {country.capital}
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CountryDetails
