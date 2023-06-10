import React, { useState } from 'react';


import Form from './Form.jsx';
import Card from './Card.jsx';
//info de las api

const Weatherapi = () => {

    let urlCurrent = "http://api.weatherapi.com/v1/current.json?key=87eff0a7030949eeab9205937230206&lang=es";
    let cityUrl = "&q=";




    let urlForecast = "http://api.weatherapi.com/v1/forecast.json?key=87eff0a7030949eeab9205937230206&q=ciudad&days=10&aqi=no&alerts=yes&lang=es";
    const [current, setcurrent] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");
    const [nextDay, setNextDay] = useState(""); //no esta de/no esta delarado 

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //current o tiempo actual

        urlCurrent = urlCurrent + cityUrl + loc;

        await fetch(urlCurrent).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((currentData) => {

            console.log(currentData);

            setcurrent(currentData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });








        //Forecast


        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });


    }


    return (

        <React.Fragment>

            <Form
                newLocation={getLocation}
            />

            <Card
                showData={show}
                loadingData={loading}
                current={current}
                forecast={forecast}
            />


        </React.Fragment>

    );

}
export default Weatherapi;