import React, { Component } from "react";

export class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      isError: false,
    };
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/?page=1&results=10&seed=testSeed')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        this.setState({ users: data.results });
      })
      .catch((error) => {
        this.setState({
          isError: true,
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { users, isLoading, isError } = this.state;

    const userCards = users.map((user) => (
      <article key={user.login.uuid}>{JSON.stringify(user)}</article>
    ));
    if (isError) {
      return <h1>ERROR HAPPENED</h1>;
    }
    if (isLoading) {
      return <h1>Loading users...</h1>;
    }
    return <div>{userCards}</div>;
  }
}

export default UsersLoader;
