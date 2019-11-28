import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })
      .then(response => dispatch({ type: "DELETE_CONTACT", payload: id }))
  };

  render() {
    const { contact } = this.props;
    const { id, name, email, phone } = contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pionter", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // stuff: PropTypes.func.isRequired
};

export default Contact;
