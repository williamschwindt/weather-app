import React from 'react';
import axios from 'axios'
import './App.css';
import WeatherSlide from './WeatherSlide';

class App extends React.Component {
  state = {
    desc: '',
    temperature: '',
    high: '',
    low: '',
    humidity: '',
    wind: '',
    sunrise: '',
    sunset: '',
    icon: ''
  };

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Bend&units=imperial&cnt=7&APPID=f198ba53eecf7c07984fc80b85bbe872'
    )
    .then((res) => {

      let iconCode = res.data.weather[0].icon;
      let iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

      this.setState({
        icon: iconUrl,
        desc: res.data.weather[0].description,
        temperature: res.data.main.temp,
        high: res.data.main.temp_max,
        low: res.data.main.temp_min,
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
        sunrise: res.data.sys.sunrise,
        sunset: res.data.sys.sunset
      })
    });
  }
  render() {
    return (
      <div className="App">
        <WeatherSlide icon={this.state.icon} 
        des={this.state.desc} 
        temperature={this.state.temperature} 
        high={this.state.high} 
        low={this.state.low} 
        humidity={this.state.humidity} 
        wind={this.state.wind} 
        sunrise={this.state.sunrise} 
        sunset={this.state.sunset}/> 
      </div>
    )
  }

}

export default App;
