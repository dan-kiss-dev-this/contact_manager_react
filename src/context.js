import React, { Component } from "react";

export const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoej@gmail.com",
        phone: "555-555-5551"
      },
      {
        id: 2,
        name: "Karen Willians",
        email: "karenw@gmail.com",
        phone: "555-555-5552"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmail.com",
        phone: "555-555-5553"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
