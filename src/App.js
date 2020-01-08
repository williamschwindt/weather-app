import React from 'react';
import axios from 'axios'
import './App.css';
import WeatherSlide from './WeatherSlide';



function setIcon(des) {
  if (des === 'clear sky') {
    return "sun";    
  } else {
    return "cloud";
  } 
}

class App extends React.Component {
  state = {
    desc: [],
    temperature: [],
    high: [],
    low: [],
    humidity: [],
    wind: [],
    sunrise: [],
    sunset: [],
    icon: []
  };

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Bend&units=imperial&cnt=7&APPID=f198ba53eecf7c07984fc80b85bbe872'
    )
    .then((res) => {
      console.log(res);
      this.setState({ desc: res.data.weather[0].description });
      this.setState({ temperature: res.data.main.temp });
      this.setState({ high: res.data.main.temp_max });
      this.setState({ low: res.data.main.temp_min });
      this.setState({ humidity: res.data.main.humidity });
      this.setState({ wind: res.data.wind.speed });
      this.setState({ sunrise: res.data.sys.sunrise });
      this.setState({ sunset: res.data.sys.sunset });
      this.setState({ icon: setIcon(this.desc) });   
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
