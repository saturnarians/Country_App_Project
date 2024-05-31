import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
        setCountry(response.data[0]);
      } catch (err) {
        setError('Failed to fetch country details');
      }

      setLoading(false);
    };

    fetchCountry();
  }, [code]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!country) return null;

  return (
    <div className="mt-10 w-16 md:w-32 lg:w-48 ">
      <Link to="/" className="text-blue-500">Back to list</Link>
      <h2 className="text-2xl font-bold my-4">{country.name.common}</h2>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="w-64 h-32 object-cover mb-4 rounded" />
      <div><strong>Population:</strong> {country.population.toLocaleString()}</div>
      <div><strong>Region:</strong> {country.region}</div>
      <div><strong>Capital:</strong> {country.capital?.[0]}</div>
      <div><strong>Subregion:</strong> {country.subregion}</div>
      <div><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</div>
      <div><strong>Currencies:</strong> {Object.values(country.currencies).map(curr => curr.name).join(', ')}</div>
      <div><strong>Border Countries:</strong> 
        <ul className="flex flex-wrap mt-2">
          {country.borders?.map(border => (
            <li key={border} className="mr-2 mb-2">
              <Link to={`/country/${border}`} className="text-blue-500">
                {border}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryDetail;
