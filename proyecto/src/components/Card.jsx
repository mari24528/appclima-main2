import React from 'react';
import Simbolodecarga from './Simbolodecarga';
import Weatherapi from './Weatherapi';


const Card = ({ loadingData, showData, current, forecast }) => {
    if (loadingData) {
        return <Simbolodecarga />;
    }
    ///tarjeta y contenido de nuevo ahi vamos...


    return (
        <div className="mt-5">
            {
                showData === true ? (
                   
                        
                            <div className="row card mb-3 mx-auto bg-dark  text-light ">
                                 <h1> Clima Actual </h1>
                                 <img className="img" src="https://images.pexels.com/photos/10817264/pexels-photo-10817264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  alt="..."/>

                                <div className="actual ">
                                   

                                    <h3 className="title text-white">{current.location.name}  </h3>
                                    
                                 <div className="actual">
                                    <h4 className=" text-white">{current.location.localtime}  </h4>
                                    <p>Temperatura: {current.current.temp_c}°C</p>
                                    <p>Sensación Termica: {current.current.feelslike_c}°C</p>
                                    <p>Humedad: {current.current.humidity}%</p>
                                    <p>Nubosidad: {current.current.cloud}%</p>

                                    <p>Condición: {current.current.condition.text}</p>
                                    <img src={current.current.condition.icon} alt="Weather Icon" />
                                   
                                 </div>
                               



                                  

                            
                                   

                                </div>
                               

                                    

                                    <div className="forecast row mt-4">
                                        <h1> Pronostico del clima </h1>
                                        {forecast && forecast.forecast && forecast.forecast.forecastday.map((day) => (
                                            <div className="tarjeta" key={day.date}>
                                                <h3>Dia: {day.date}</h3>
                                                <p>Temperatura: {day.day.avgtemp_c}°C</p>
                                                <p>Condición: {day.day.condition.text}</p>
                                                <img src={day.day.condition.icon} alt="Weather Icon" />

                                            </div>
                                        ))}
                                    </div>
                                




                            </div>

                        



                    

                ) : (
                    <h2 className="text-light">Sin datos</h2>


                )
            }




        </div >



    );
}

export default Card;