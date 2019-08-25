import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactDetails: false
  };

  onShowClick = () => {
    this.setState({
      showContactDetails: !this.state.showContactDetails
    });
  };

  onDeleteContact = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { contact } = this.props;
    const { id, name, email, phone } = contact;
    const { showContactDetails } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3'>
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className='fas fa-sort-down'
                  style={{ cursor: "pointer" }}
                />
                <i
                  onClick={this.onDeleteContact.bind(this, id, dispatch)}
                  className='fas fa-times'
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className='fas fa-pencil-alt mr-3'
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black"
                    }}
                  />
                </Link>
              </h4>
              {showContactDetails ? (
                <ul className='list-group'>
                  <li className='list-group-item'>{email}</li>
                  <li className='list-group-item'>{phone}</li>
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
};

export default Contact;
