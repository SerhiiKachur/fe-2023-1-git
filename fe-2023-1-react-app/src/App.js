import React from "react";
import Header from "./Components/Header";
import Greeting from "./Components/Greeting";
import Counter from "./Components/Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting name="User" />
        <Greeting name="Anton" />
        <Counter />
      </div>
    );
  }
}

export default App;
