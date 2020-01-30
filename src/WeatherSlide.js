import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faSun, faWind, faMoon, faWater } from '@fortawesome/free-solid-svg-icons';
library.add(
    faCloud,
    faSun,
    faWind,
    faMoon,
    faWater
);

function WeatherSlide(props) {
    var myDate = new Date(props.sunrise *1000);
    var sunrise = `${myDate.getHours()}:${myDate.getMinutes()}`;
    var mySecondDate = new Date(props.sunset *1000);
    var sunset = `${mySecondDate.getHours()-12}:${mySecondDate.getMinutes()}`;
    return (
        <div>
            <h1 className="title">Todays Weather In Bend</h1>
            <div className="slide">
                <div className="weather-top">
                    <img src={props.icon} className="main-icon" alt="weather-icon" />
                    <div className="current-info">
                        <h2>{Math.round(props.temperature)}</h2>
                        <p>{props.des}</p>
                    </div>
                    <div className="current-temps">
                        <p>high: {Math.round(props.high)}</p>
                        <p>low: {Math.round(props.low)}</p>
                    </div>
                </div>
                <div className="weather-bottom">
                    <div className="day-info">
                        <FontAwesomeIcon icon="sun" size='3x' color="white" className="small-icon" />
                        <p>{sunrise}am</p>
                    </div>
                    <div className="day-info">
                        <FontAwesomeIcon icon="moon" size='3x' color="white" className="small-icon" />
                        <p>{sunset}pm</p>
                    </div>
                    <div className="day-info">
                        <FontAwesomeIcon icon="water" size='3x' color="white" className="small-icon" />
                        <p>{props.humidity}%</p>
                    </div>
                    <div className="day-info">
                        <FontAwesomeIcon icon="wind" size='3x' color="white" className="small-icon" />
                        <p>{Math.round(props.wind)}mph</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherSlide