import React from "react";
import "./style.css";

class Greeting extends React.Component {
  render() {
    const { name } = this.props;
    // console.log(name);
    // 1. Умовний рендерінг з перевіркою якщо невказаний пропс(name);
    // if (!name) {
    // return <p>Hello Guest!</p>;
    // }
    // return <p>Hello {name}!</p>;

    // 2. Тернарна версія перевірки на пустий пропс:
    // const userName = !name ? 'Guest': name;
    // return <p>Hello {userName}!</p>;

    // 2.5 Тернарна версія перевірки без створення окремої змінної
    // одразу повертаємо
    

    return <p className="greetingText">Hello {!name ? "Guest" : name} </p>;
  }
}


// 3. Через створеня додаткових функцій (змінних)
// function Greeting(props) {
//   const { name } = props;
//   if (!name) {
//     return <GreetGuest />;
//   }
//   return <GreetUser userName={name}/>
// }

// 3.5 Через тернарку:

// function Greeting (props){
//   const {name }=props;
//   return !name ? <GreetGuest /> : <GreetUser userName={name}/>;
// }

// function GreetUser(props) {
//   return <p>Hello {props.userName}!</p>
// }

// const GreetGuest = (props)=> <p>Hello Guest!</p>

export default Greeting;
