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
      <div>
        <h1>We're in the clock</h1>
        <p>{ this.state.time.getHours() }:{this.state.time.getMinutes()}
        :{this.state.time.getSeconds()}</p>
      </div>
    );
  }
}

export default Clock;
