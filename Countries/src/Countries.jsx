import CountryInfo from './CountryInfo'



const countries = ({countries, selectCountry}) => {

    if (countries.length > 1 && countries.length < 10) {
        return (
        countries.map(c => (
            <li key={c["name"]["common"]}>
                { c["name"]["common"]} <button onClick={() => selectCountry(c["name"]["common"])}>Show</button>
            </li>

        )))
    }

    else if (countries.length > 10) {
        return ("Too many matches, please specify diffrent filter")
    }

    else if (countries.length == 1) {
        const country = countries[0]
        return (<CountryInfo country={country}/>)
    } 
    } 


export default countries