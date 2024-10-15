import React from "react";
import '../styles/style.css';

interface Country {
  name: string;
  population: number;
  size: number;
  capital: string;
}

export const countriesList: Country[] = [
  { name: "Pakistan", population: 235800000, size: 770880, capital: "Islamabad" },
  { name: "India", population: 1417000000, size: 3287000, capital: "Delhi" },
  { name: "Afghanistan", population: 41130000, size: 652864, capital: "Kabul" }
];

const CountryName = () => {
  return (
    <>
      <h1>Countries</h1>
      <p className="parag">Here are a list of Countries, select one to get further information about it</p>
      <ul>
        {countriesList.map((country) => (
          <li key={country.name} className="liststyle">
            <a href={`countries/${country.name}`}>
              <button className="bw-button-style">{country.name}</button>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CountryName;
