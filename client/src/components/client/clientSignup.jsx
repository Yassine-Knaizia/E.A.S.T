import React from "react";
import { connect } from "react-redux";
import axios from "axios";
class ClientSignup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      Email: "",
      password: "",
      repass: "",
      age: "",
      gender: "male",
      city: "",
      Adresse: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    let clientData = {
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Email: this.state.Email,
      Password: this.state.password,
      Gender: this.state.gender,
      Age: this.state.age,
      City: this.state.city,
      Adresse: this.state.Adresse,
    };
    if (this.state.password === this.state.repass) {
      axios
        .post("/api/Clients/Signup", clientData)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  handleChange(e) {
    var name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }
  render() {
    return (
      <div>
             <form onSubmit={this.handleClick}>
        <div onChange={this.handleChange}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your First Name "
              name="firstName"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Last Name "
              name="lastName"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email "
              name="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Your Password "
              name="password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Your Password "
              name="repass"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Age "
              name="age"
              required
            />
          </div>
          <label htmlFor="Your Gender">Your Gender</label>
          <select
            className="select"
            placeholder="Your Gender"
            name="gender"
            className="LoginSignupInp"
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your City "
              name="city"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Adress "
              name="Adresse"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              className="btnSubmit"
              value="Signup"
              required
            />{" "}
            <input type="submit" className="btnSubmit" value="Login" />
          </div>
        </div>
        </form>
      </div>
    );
  }
}

export default ClientSignup;