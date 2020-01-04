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
    return (
        <div>
            <h1 className="title">Todays Weather In Bend</h1>
            <div className="slide">
                <div className="weather-top">
                    <FontAwesomeIcon icon={props.icon} size='8x'  color="white" className="main-icon" />
                    <div className="current-info">
                        <h2>{Math.round(props.temperature)}</h2>
                        <p>{props.des}</p>
                    </div>
                    <div className="current-temps">
                        <p>city high: {Math.round(props.high)}</p>
                        <p>city low: {Math.round(props.low)}</p>
                    </div>
                </div>
                <div className="weather-bottom">
                    <div className="day-info">
                        <FontAwesomeIcon icon="sun" size='3x' color="white" className="small-icon" />
                        <p>{props.sunrise}am</p>
                    </div>
                    <div className="day-info">
                        <FontAwesomeIcon icon="moon" size='3x' color="white" className="small-icon" />
                        <p>{props.sunset}pm</p>
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