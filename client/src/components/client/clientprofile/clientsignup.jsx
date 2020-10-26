import React from "react";
import { connect } from "react-redux";
import axios from "axios";
class ClientSignUp extends React.Component {
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
    this.SignUp = this.SignUp.bind(this);
  }
  SignUp(e) {
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
          this.props.ChangePage("/Login")
          window.history.pushState({}, null, "/Login")
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
      <div className="limiter">
        <div className="container-login100" >
          <div className="wrap-login100">
            <form className="login100-form validate-form" onChange={this.handleChange} onSubmit={this.SignUp}>
              <span className="login100-form-logo">
                <i className="zmdi zmdi-landscape"></i>
              </span>

              <span className="login100-form-title p-b-34 p-t-27">
                Sign up
                  </span>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="text" name="FirstName"
                  placeholder="First Name"
                />
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="text" name="LastName"
                  placeholder="Last Name"
                />
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="text"
                  name="Email"
                  placeholder="Email"
                />
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="password"
                  name="Password"
                  placeholder="Password"
                />
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <label htmlFor="Your Gender">Your Gender</label>
              <select
                className="input100"
                name="Gender"
                placeholder="Your Gender"
              >
                <option value="select" disabled>Select</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="text"
                  name="Age"
                  placeholder="Age"
                />
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="text"
                  name="City"
                  placeholder="City"
                />
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="text"
                  name="Adresse"
                  placeholder="Adress"
                />
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  Sign Up
                      </button>
              </div>
            </form>
          </div>
        </div>
        <footer />
      </div>
    );
  }
}

export default ClientSignUp;