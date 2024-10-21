"use client";

import React, { useEffect, useState } from 'react';
import { fetchCountries, Country } from '../../../../lib/countryapi';
import '../../styles/style.css'

export default function CountryPage({ params }: { params: { country: string } }) {
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined);

  useEffect(() => {
    const getCountries = async () => {
      const fetchedCountries = await fetchCountries();
      const countryName = params.country.replace(/-/g, ' ');
      const country = fetchedCountries.find((country) => country.name.toLowerCase() === countryName.toLowerCase());
      setSelectedCountry(country);
    };

    getCountries();
  }, [params.country]);

  return (
    <div style={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}>
      <div className="card">
        <h1>Country Information</h1>
        {selectedCountry ? (
          <div>
            <p>Name: {selectedCountry.name}</p>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Population: {selectedCountry.population}</p>
            {/* <p>Size: {selectedCountry.size} km<sup>2</sup></p> */}
          </div>
        ) : (
          <p>Country not found</p>
        )}
      </div>
    </div>
  );
}
