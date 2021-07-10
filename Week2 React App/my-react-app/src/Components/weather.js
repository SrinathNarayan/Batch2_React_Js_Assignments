import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Weather.css";


const Weather = () => {
    const [weatherdata, setweatherdata] = useState({
        weatherdata:'string',
        main:'string',
      
    })

    const Celcius = (temp) => {
        let cell = Math.floor(temp - 273.15);
        return cell;
    }
    useEffect(() => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=80f99460ff828d80fe8545b01d7050ae')
            .then((res) => {
                setweatherdata({
                    weatherdata: res.data.weather,
                    main: res.data.main,
                    timezone: res.data.sys

                })
                console.log(res.data.weather)
            }).catch((err) => console.error("Error" + err))
    }, [])
    return (
        <div>
            <div className="container-fluid">
                <div className="alert alert-primary" role="alert">
                    Weather-Report
                </div>
                <div className="weather">
                <div className="card">
                    <div class="card-header">
                        Chennai
                    </div>
                    <div class="card-body">
                     

                        <h2>Description: {weatherdata.weatherdata[0].description}</h2>

                        <h2>Degree:{Celcius(weatherdata.main.temp)}'c</h2>

                        <h2>pressure:{weatherdata.main.pressure}</h2>

                        <h2>humidity:{weatherdata.main.humidity}</h2>


                    </div>
                </div>
                </div>

            </div>
        </div>
    )

}

export default Weather;