// page.tsx
import React from "react";
import '../styles/style.css';
import { countriesList } from "./countrylist";

export default function CountryName() {
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
