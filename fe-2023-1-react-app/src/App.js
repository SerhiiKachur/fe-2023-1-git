import React from "react";
import UsersLoader from "./Components/UsersLoader";
import { BrowserRouter, Switch, Router, Link } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  handleIsVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contacts = () => <div>Contacts</div>;

export default App;
