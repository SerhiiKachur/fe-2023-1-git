import React from "react";

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
    };
  }

  start = () => {
    // const {currentTime} =this.state;
    this.intervalID = setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime + 1,
      });
    }, 1000);
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.start();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.intervalID);
  }


  render() {
    const { currentTime } = this.state;
    return (
      <section>
        <p>{currentTime}</p>
        <button onClick={this.start}>Start</button>
        <button>Stop</button>
      </section>
    );
  }
}
export default StopWatch;
