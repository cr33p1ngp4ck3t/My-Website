/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { fetchCountries, Country } from '../../../lib/countryapi';
import "../styles/style.css"

export default function CountryPage({ params }: { params: { country: string } }) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  useEffect(() => {
    const getCountries = async () => {
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
    };

    getCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedCountries = filteredCountries.reduce((acc: { [key: string]: Country[] }, country) => {
    const firstLetter = country.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(country);
    return acc;
  }, {});

  return (
    <div style={{ justifyContent: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search Countries..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className='input-style-1'
      />
      <div>
        <h1>Countries</h1>
        <div >
          {Object.keys(groupedCountries).sort().map(letter => (
            <button key={letter} onClick={() => setSelectedLetter(letter)} className="bw-button-style">
              {letter}
            </button>
          ))}
        </div>
        <ul>
          {selectedLetter && groupedCountries[selectedLetter] ? (
            groupedCountries[selectedLetter].map((country) => (
              <li key={country.name} className="list-style">
                <Link href={`countries/${country.name.replace(/\s+/g, '-')}`}>
                  <button className="bw-button-style">{country.name}</button>
                </Link>
              </li>
            ))
          ) : (
            <p>Select a letter to see countries</p>
          )}
        </ul>
      </div>
    </div>
  );
}
