import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    const time = new Date();
    this.setState({ time });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return(
      <div className="container clock">
        <h1 className="header">We're in the clock</h1>
        <div>
          <h2>Time:</h2>
          <p className="time">{ this.state.time.getHours() }:{this.state.time.getMinutes()}
            :{this.state.time.getSeconds()}</p>
        </div>
        <div>
          <h2>Date:</h2>
          <p>{this.state.time.getMonth() + 1}/{this.state.time.getDate()}/
          {this.state.time.getFullYear()}</p>
        </div>
      </div>
    );
  }
}

export default Clock;
