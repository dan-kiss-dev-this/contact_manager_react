import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./contact.css";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = () => {
    console.log(5);
  };

  render() {
    const { contact } = this.props;
    const { name, email, phone } = contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fas fa-sort-down"
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pionter", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email {email}</li>
            <li className="list-group-item">Phone {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // stuff: PropTypes.func.isRequired
};

export default Contact;
