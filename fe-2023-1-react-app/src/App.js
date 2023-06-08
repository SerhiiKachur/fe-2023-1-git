import React from 'react';
import StopWatch from './Components/StopWatch';
import LoginForm from './Components/LoginForm';
import MessageDashboard from './Components/MessageDashboard'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  handleIsVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    const { isVisible } = this.state;
    return (
      <>
        <button onClick={this.handleIsVisible}>Toggle Visibility</button>
        {isVisible && <StopWatch />}
        <LoginForm />
        <MessageDashboard />
      </>
    );
  }
}

export default App;