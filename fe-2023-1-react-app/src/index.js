import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class Header extends React.Component {
  render() {
    const h1 = React.createElement("h1", {}, "My Site");

    const nav = React.createElement("nav", {}, "This is nav");

    return React.createElement(
      "header",
      { id: "header", className: "class" },
      "header",
      h1,
      nav
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.add = this.add.bind(this); метод відображення  this щоб не загубився або стрілковою функцією на прикладі метода add() вказано нижче! 
  }

  add=()=> {
    console.log("+");
    // ++this.state.count; не відображає зміну в лічільнику
    // console.log(this.state.count);

    this.setState({
      count: this.state.count+1,
    })
  }
  substract=()=> {
    console.log("-");
    // this.state.count--; не відображає зміну в лічільнику
    // console.log(this.state.count);
    this.setState({
      count: this.state.count-1,
    })
  }

  render() {
    const { count } = this.state;

    const p = React.createElement("p", {}, `Count is:${count}`);
    const add = React.createElement(
      "button",
      {
        onClick: this.add,
      },

      "Add"
    );
    const substract = React.createElement(
      "button",
      {
        onClick: this.substract,
      },
      "Substract"
    );
    const fragment = React.createElement(
      React.Fragment,
      null,
      p,
      add,
      substract
    );
    return fragment;
  }
}
const counter1 = React.createElement(Counter);
const elem = React.createElement(Header);
const root = ReactDOM.createRoot(document.getElementById("root"));

// const elem = React.createElement('header',{id:"header", className:'class'},'children');
const container = React.createElement(React.Fragment, {}, elem, counter1);

root.render(container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
