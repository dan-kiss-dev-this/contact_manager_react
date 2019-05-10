import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./contact.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {};

    this.onShowClick = this.onShowClick.bind(this);
  }
  // state = {};
  onShowClick() {
    console.log(this.state);
  }

  render() {
    const { contact } = this.props;
    const { name, email, phone } = contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email {email}</li>
          <li className="list-group-item">Phone {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
