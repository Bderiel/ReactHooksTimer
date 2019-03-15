import React, { Component } from "react";

export class TimerClasses extends Component {
  state = {
    time: 0,
    stopInterval: null
  };

  start = () => {
    clearInterval(this.state.stopInterval);
    const start = Date.now() - this.state.time;
    this.setState({
      stopInterval: setInterval(() => {
        const time = Date.now() - start;
        this.setState({ time });
      }, 0)
    });
  };

  stop = () => {
    this.setState({ time: 0 });
    clearInterval(this.state.stopInterval);
  };

  render() {
    const { time } = this.state;
    return (
      <div>
        <label>Classes LOL</label>
        <h1>{time}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}
