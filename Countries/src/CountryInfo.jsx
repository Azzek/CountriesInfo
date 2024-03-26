import { useState, useEffect } from "react"
import axios from "axios"

const CountryInfo = ({country}) => {

    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${country["name"]["common"]}?key=C9693ZU2SXVHRA4EPQKSZ4RE2`)
        .then(response => {
            setWeather(response.data.currentConditions)
        })
    }, [])
    
    return (
        <>
            <h1>{country["name"]["common"]}</h1>

            <h2>{Object.keys(country["languages"]).length > 1? "languages:" : "language:"}</h2>

            {Object.keys(country["languages"]).map(key => (
                <p key={key}>{country["languages"][key]}</p>
            )
            )}

            <img src={country["flags"]["png"]}/>
            
            <h1>Weather for {country["name"]["common"]}</h1>
            <h2>Time: {weather.datetime}</h2>
            <img src={`/public/assets/${weather.icon}.png`} alt="" />
            <h2>Temperature: {weather.temp}</h2>
            <h2>Windspeed: {weather.windspeed}</h2>
        </>
    )
}

export default CountryInfo