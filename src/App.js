import React from 'react';
import './App.css';
import WeatherSlide from './WeatherSlide';
import storm from './Images/Storm.jpg';
import snow from './Images/snow.png'
import sun from './Images/sunny.png'
import rain from './Images/rain.png'
import cloudy from './Images/cloudy.png'

function App() {
  return (
    <div className="App">
      <WeatherSlide day={'Monday'} high={80} low={60} img={sun} altImg={'sunny'}/>
      <WeatherSlide day={'Tuesday'} high={84} low={68} img={sun} altImg={'sunny'}/>
      <WeatherSlide day={'Wednesday'} high={75} low={62} img={cloudy} altImg={'cloudy'}/>
      <WeatherSlide day={'Thursday'} high={70} low={59} img={rain} altImg={'rainy'}/>
      <WeatherSlide day={'Friday'} high={55} low={40} img={storm} altImg={'rainy'}/>
      <WeatherSlide day={'Saturday'} high={40} low={20} img={rain} altImg={'rainy'}/>
      <WeatherSlide day={'Sunday'} high={29} low={2} img={snow} altImg={'snowing'}/>
    </div>
  );
}

export default App;
