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
            <h1 className="title">Todays Weather</h1>
            <div className="slide">
                <div className="weather-top">
                    <FontAwesomeIcon icon="cloud" size='8x'  color="white" className="main-icon" />
                    <div className="current-info">
                        <h2>62</h2>
                        <p>{props.des}</p>
                    </div>
                    <div className="current-temps">
                        <p>high: 70</p>
                        <p>low: 55</p>
                    </div>
                </div>
                <div className="weather-bottom">
                    <div className="day-info">
                        <FontAwesomeIcon icon="sun" size='3x' color="white" className="small-icon" />
                        <p>6:00am</p>
                    </div>
                    <div className="day-info">
                        <FontAwesomeIcon icon="moon" size='3x' color="white" className="small-icon" />
                        <p>10:00pm</p>
                    </div>
                    <div className="day-info">
                        <FontAwesomeIcon icon="water" size='3x' color="white" className="small-icon" />
                        <p>70%</p>
                    </div>
                    <div className="day-info">
                        <FontAwesomeIcon icon="wind" size='3x' color="white" className="small-icon" />
                        <p>3mph</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherSlide