import React from "react";

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
    };
    this.intervalID = null;
  }

  start = () => {
    // const {currentTime} =this.state;
    if (this.intervalID) {
      return;
    }
    this.intervalID = setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime + 1,
      });
    }, 1000);
  };

  stop = () => {
    clearInterval(this.intervalID);
    this.intervalID = null;

  }

  componentDidMount() {
    console.log("componentDidMount");
    this.start();
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    this.stop();
  }

  render() {
    const { currentTime } = this.state;
    return (
      <section>
        <p>{currentTime}</p>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </section>
    );
  }
}
export default StopWatch;
