import {useState, useEffect} from 'react'
import axios from 'axios'
import Countries from './Countries'


function App() {

  const [countryFilter, setCountryFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect( 
    () => {
      axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      },)
    }, []
  )

  const handleCountryChange = (e) => {
    setCountryFilter(e.target.value)
  }

  const filteredCountries = countryFilter.length > 0? countries.filter(c => c["name"]["common"].toLowerCase().includes(countryFilter.toLowerCase())) : []


  return (
    <div className='container'>
      
      <span className='input-text'>
        Find countries:
      </span>

      <input placeholder='Find ur country 😁' value={countryFilter} onChange={handleCountryChange}/>
      
        <Countries countries={filteredCountries} selectCountry={setCountryFilter}/>
        
    </div>
  )
}

export default App