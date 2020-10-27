import React from "react";
import axios from "axios";

class FreeLancerSignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      Email: "",
      password: "",
      repass: "",
      age: "",
      field: "",
      gender: "",
      phoneNumber: "",
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
      PhoneNumber: this.state.phoneNumber,
      Age: this.state.age,
      Field: this.state.field,
      City: this.state.city,
      Adresse: this.state.Adresse,
    };
    if (this.state.password === this.state.repass) {
      axios
        .post("/api/freeLancers/Signup", clientData)
        .then((data) => {
          console.log(data);
          this.props.ChangePage("/FreeLancerLogin")
          window.history.pushState({}, null, "/FreeLancerLogin")
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
          <div className="wrap-signup100">
            <form className="login100-form validate-form"  onChange={this.handleChange} onSubmit={this.SignUp}>
              <span className="login100-form-logo">
                <i className="zmdi zmdi-landscape"></i>
              </span>

              <span className="login100-form-title p-b-34 p-t-27">
                Sign up
                  </span>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text" name="FirstName"
                  placeholder="First Name"
                  required
                />
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="text" name="LastName"
                  placeholder="Last Name"
                  required
                />
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="text"
                  name="Email"
                  placeholder="Email"
                  required
                />
                <span className="focus-input100" data-placeholder="&#x2709;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="password"
                  name="Password"
                  placeholder="Password"
                  required
                />
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <span className="focus-input100" data-placeholder="&#9893;"></span>
                <select
                  className="input100"
                  name="Gender"
                  placeholder="Your Gender"
                  required
                >
                  <option value="select" >Choose Gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>

              <div className="wrap-input100 validate-input" >
                <span className="focus-input100" data-placeholder="&#xf13e;"></span>
                <select
                  className="input100"
                  name="Field"
                  placeholder="Your Field"
                  required
                >
                  <option value="select">Choose Field</option>
                  <option value="Design">Design</option>
                  <option value="Photography">Photography</option>
                  <option value="Music">Music</option>
                  <option value="Tatoo">Tatoo</option>
                </select>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="number"
                  name="Age"
                  placeholder="Age"
                  required
                />
                <span className="focus-input100" data-placeholder="&#x10471;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="text"
                  name="PhoneNumber"
                  placeholder="Phone number"
                  required
                />
                <span className="focus-input100" data-placeholder="&#xf2b4;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="text"
                  name="City"
                  placeholder="City"
                  required
                />
                <span className="focus-input100" data-placeholder="&#x1F3E2;"></span>
              </div>

              <div className="wrap-input100 validate-input" >
                <input
                  className="input100"
                  type="text"
                  name="Adresse"
                  placeholder="Adress"
                  required
                />
                <span className="focus-input100" data-placeholder="&#127968;"></span>
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

export default FreeLancerSignUp;