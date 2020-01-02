import React from 'react';
import Axios from 'axios'
import './App.css';
import WeatherSlide from './WeatherSlide';




function App() {
  let data = {
    description: ''
  } 
  Axios.get('http://api.openweathermap.org/data/2.5/weather?q=Bend&?units=imperial&cnt=7&APPID=f198ba53eecf7c07984fc80b85bbe872'
    )
    .then((res) => {
      console.log(res);
      data.description = res.data.weather[0].description;
      console.log(data.description);
      
    })

    .catch((err) => {
      console.log(err);
    })


  return (
    <div className="App">
      <WeatherSlide des={data.description}/>
    </div>
  );
}

export default App;
