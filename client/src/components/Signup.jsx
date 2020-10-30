import React from "react";
import Footer from "./footer.jsx";
import ClientSignup from "../components/client/clientSignup.jsx";
import FreelancerSignup from "../components/serviceprovider/freelancerSignup.jsx";
import { connect } from "react-redux";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: true,
      serviceprovider: false,
      Registration: "Register as a client",
    };
    this.serviceprovider = this.serviceprovider.bind(this);
    this.client = this.client.bind(this);
  }
  serviceprovider() {
    this.setState({
      client: false,
      serviceprovider: true,
      Registration: "Register as a Freelancer",
    });
  }

  client() {
    this.setState({
      client: true,
      serviceprovider: false,
      Registration: "Register as a client",
    });
  }
  
  render() {
    return (<div>
      
      <div>
         <div className="container">
<div id="login" className="signin-card loginstyle">
  <div className="logo-image">
  <img src="https://bootdey.com/img/Content/User_for_snippets.png" alt="Logo" title="Logo" width="138" className="loginimg"/>
  </div>
  <h1 className="display1 logintextcolor">Signup</h1>
 
  <form action="" method="" className="" role="form" onSubmit={this.Login}>
    <div id="form-login-username" className="form-group">
    <label for="Email" className="float-label logintextcolor" >First-Name</label>
      <input id="username" className="form-control" name="Email" type="text" size="18" alt="login" onChange={event=>{this.setState({Email:event.target.value})}} required />
    </div>

    <div id="form-login-password" className="form-group">
    <label for="username" className="float-label logintextcolor" >Last-Name</label>
      <input id="passwd" className="form-control" name="password" type="text" size="18" alt="password" onChange={event=>{this.setState({Password:event.target.value})}} required/>
    </div>

    <div id="form-login-username" className="form-group">
    <label for="Email" className="float-label logintextcolor" >Email</label>
      <input id="username" className="form-control" name="Email" type="email" size="18" alt="login" onChange={event=>{this.setState({Email:event.target.value})}} required />
    </div>

    <div id="form-login-username" className="form-group">
    <label for="Email" className="float-label logintextcolor" >Password</label>
      <input id="username" className="form-control" name="Email" type="password" size="18" alt="login" onChange={event=>{this.setState({Email:event.target.value})}} required />
    </div>

    <div id="form-login-username" className="form-group">
    <label for="Email" className="float-label logintextcolor" >Password-Again</label>
      <input id="username" className="form-control" name="Email" type="password" size="18" alt="login" onChange={event=>{this.setState({Email:event.target.value})}} required />
    </div>

    <div id="form-login-username" className="form-group">
    <label for="Email" className="float-label logintextcolor" >Gender</label>
    <select name="cars" className="LoginSignupInp">
  <option value="Male">Male</option>
  <option value="female">female</option>
</select>
    </div>

    <div id="form-login-username" className="form-group">
    <label for="Email" className="float-label logintextcolor" >Age</label>
      <input id="username" className="form-control" name="Email" type="text" size="18" alt="login" onChange={event=>{this.setState({Email:event.target.value})}} required />
    </div>

    <div id="form-login-username" className="form-group">
    <label for="Email" className="float-label logintextcolor" >City</label>
   <select name="cars" className="LoginSignupInp">
  <option value="volvo">Tunis</option>
  {/* //////////Add TUnisian citys///// */}
</select>
    </div>

    <div id="form-login-username" className="form-group">
    <label for="Email" className="float-label logintextcolor" >Address</label>
      <input id="username" className="form-control" name="Email" type="text" size="18" alt="login" onChange={event=>{this.setState({Email:event.target.value})}} required />
    </div>

    <div id="form-login-remember" className="form-group">
    </div>
    <div>
      <button className="btn btn-block btn-info ripple-effect" type="submit" name="Submit" alt="sign in"  style={{ background: "transparent"}}>Sign in</button>  
	  </div>
      </form>
    </div>
</div>
      </div>;
      <Footer />
     
      </div>
    );
  }
}

export default Signup;