import React from 'react'
import Images from './Images'

function WeatherSlide(props) {
    return (
        <div className="slide">
            <h2>{props.day}</h2>
            <Images source={props.img} altText={props.altImg} />
            <p>{props.high}</p>
            <p>{props.low}</p>
        </div>
    )
}

export default WeatherSlide