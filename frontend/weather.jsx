import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
    }
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(location) {
    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    url += toQueryString(params);
    console.log("Constructing url");

    const apiKey = '4a34e38f48696b0f5a42360d9a01fe17';
    url += `&APPID=${apiKey}`;

    // API request
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      console.log("Requesting")
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather: data});
        console.log("XML request success.")
      }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  render() {
    let content = <div></div>;

    if (this.state.weather) {
      const weather = this.state.weather;
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
        <p>{weather.name}</p>
        <p>{temp.toFixed(1)} degrees</p>
      </div>;
    } else {
      content = <div className='loading'>loading weather...</div>;
    }
    return (
      <div className='weather-box widget-box'>
        <h1>Weather</h1>
        <div className="weather">
          {content}
        </div>
      </div>
    );
  }
}

const toQueryString = (obj) => {
  const parts = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
    }
  }
  return parts.join('&');
}