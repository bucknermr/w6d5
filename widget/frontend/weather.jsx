import React from 'react';

class Weather extends React.Component {

  constructor() {
    super();
    this.state = {
      // city:
      // temperature:
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;

      const request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&APPID=642357c93f1c42df2620b47e0254763e`;

      request.open('GET', url, true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          let resp = request.responseText;
          console.log(resp);
        } else {
          // We reached our target server, but it returned an error
          console.log("there was an error");
        }
      };

      request.send();

    });
  }

  render() {
    return (
      <div className="container">
        <h1>This is weather.</h1>
      </div>
    );
  }
}

export default Weather;


// weather key thing
// &APPID=642357c93f1c42df2620b47e0254763e
