import { countriesList } from "../page"

export default function CountryPage({ params }: { params: { country: string } }) {
  const selectedCountry = countriesList.find((country) => country.name === params.country);

  return (
    <div style={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}>
      <div className="card">
        <h1>Country: </h1>
        {selectedCountry ? (
          <div>
            <p>Name: {selectedCountry.name}</p>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Population: {selectedCountry.population}</p>
            <p>Size: {selectedCountry.size} km<sup>2</sup></p>
          </div>
        ) : (
          <p>Country not found</p>
        )}
      </div>
    </div>
  );
}
