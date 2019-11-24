import React, { Component } from 'react'

class Contacts2 extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'wizz@gmail.com',
          phone: '111-111-111'
        },
        {
          id: 2,
          name: 'John Doe2',
          email: 'wizz@gmail.com2',
          phone: '111-111-1112'
        },
        {
          id: 3,
          name: 'John Doe3',
          email: 'wizz@gmail.com3',
          phone: '111-111-1113'
        }
      ]
    }
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>sup</h1>
        {contacts.map((contact, index) => {
          // eslint-disable-next-line no-unused-expressions
          return <span key={index}>{contact.name}</span>
        })}
      </div>
    )
  }
}

export default Contacts2
