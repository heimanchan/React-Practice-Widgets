import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    this.intervalId = "";
  }

  tick() {
    this.intervalId = this.setState({ time: new Date() })
  }

  render() {
    return (
      <div className="clock-box widget-box">
        <h1>Shiba Clock</h1>
        <div className="clock">
          <div className="time">
            <p>TIME: </p>
            <p>
              { this.state.time.toLocaleTimeString() }
            </p>
          </div>

          <div className="date">
            <p>DATE:</p>
            <p>
              { this.state.time.toDateString() }
            </p>
          </div>
        </div>
      </div>
    )
  }
}