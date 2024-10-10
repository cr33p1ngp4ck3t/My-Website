import { countriesList } from "../page"

export default function CountryPage({params}:{params:{params:string}&{country:string}}){

  function CheckCountry() {

    const selectedCountry = countriesList.find((country) => country.name === params.country)
    
      return(
        <>
        <div className="card">
        <h1>Country: </h1>
        { selectedCountry && (
          <div>
            <p>Name: {selectedCountry.name}</p>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Population: {selectedCountry.population}</p>
            <p>Size: {selectedCountry.size} km^(2)</p>
          </div>
       )}
        </div>
        </>
      )
    }
  


return(
  <>
    <div style={{marginBottom:'1rem'}}>&lt; <a href="/countries">back</a></div>
    <div style={{justifyContent:'center', display:"flex", alignContent:"center"}}>
    <CheckCountry />
    </div>
  </>  
  )
}