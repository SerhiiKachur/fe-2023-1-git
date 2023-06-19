import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.add = this.add.bind(this); метод відображення  this щоб не загубився або стрілковою функцією на прикладі метода add() вказано нижче!
  }

  add = () => {
    console.log("+");
    // ++this.state.count; не відображає зміну в лічільнику
    // console.log(this.state.count);

    this.setState({
      count: this.state.count + 1,
    });
  };
  substract = () => {
    console.log("-");
    // this.state.count--; не відображає зміну в лічільнику
    // console.log(this.state.count);
    this.setState({
      count: this.state.count - 1,
    });
  };

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

export default Counter;