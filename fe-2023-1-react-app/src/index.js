import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header";
import Greeting from "./Components/Greeting";
import Counter from "./Components/Counter";




const counter1 = React.createElement(Counter);
const elem = React.createElement(Header);
const root = ReactDOM.createRoot(document.getElementById("root"));

const greeting1 = React.createElement(Greeting, { name: "test" });

// const greeting1 = <Greeting name="Test"></Greeting>;
// const greeting1 = <Greeting name="Test" />; якщо немає чілдренів(дітей (тексту)) теж саме що в строці зверху

// const elem = React.createElement('header',{id:"header", className:'class'},'children');
const container = React.createElement(
  React.Fragment,
  {},
  elem,
  counter1,
  greeting1
);

root.render(container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
