import React from "react";
import axios from "axios";
class FreelancerSignup extends React.Component {
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
      city: "Tunis",
      adress: "",
      field: "Design",
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    let freelancerData = {
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Email: this.state.Email,
      Password: this.state.password,
      Gender: this.state.gender,
      Age: this.state.age,
      City: this.state.city,
      Adresse: this.state.adress,
      Field: this.state.field,
    };
    if (this.state.password === this.state.repass) {
      axios
        .post("/api/freeLancers/Signup", freelancerData)
        .then((data) => {
          console.log(data.data);
          this.props.ChangePage("/Login")
          window.history.pushState({},null,"/Login")
        })
        .catch((e) => {
          console.log(e);
        });
    }
  
  }

  render() {
    return (
      <div>
      
      <div>
         <div className="container">
<div id="login" className="signin-card loginstyle">
  <div className="logo-image">
  <img src="https://bootdey.com/img/Content/User_for_snippets.png" alt="Logo" title="Logo" width="138" className="loginimg"/>
  </div>
  <h1 className="display1 logintextcolor">Signup</h1>
 
  <form action="" method="" className="" role="form" onSubmit={this.handleClick}>
    <div id="form-login-username" className="form-group">
    <label htmlFor="Email" className="float-label logintextcolor" >First-Name</label>
      <input id="username" className="form-control" name="Email" type="text" size="18" alt="login" onChange={event=>{this.setState({firstName:event.target.value})}} required />
    </div>

    <div id="form-login-password" className="form-group">
    <label htmlFor="username" className="float-label logintextcolor" >Last-Name</label>
      <input id="passwd" className="form-control" name="password" type="text" size="18" alt="password" onChange={event=>{this.setState({lastName:event.target.value})}} required/>
    </div>

    <div id="form-login-username" className="form-group">
    <label htmlFor="Email" className="float-label logintextcolor" >Email</label>
      <input id="username" className="form-control" name="Email" type="email" size="18" alt="login" onChange={event=>{this.setState({Email:event.target.value})}} required />
    </div>

    <div id="form-login-username" className="form-group">
    <label htmlFor="Email" className="float-label logintextcolor" >Password</label>
      <input id="username" className="form-control" name="Email" type="password" size="18" alt="login" onChange={event=>{this.setState({password:event.target.value})}} required />
    </div>

    <div id="form-login-username" className="form-group">
    <label htmlFor="Email" className="float-label logintextcolor" >Password-Again</label>
      <input id="username" className="form-control" name="Email" type="password" size="18" alt="login" onChange={event=>{this.setState({repass:event.target.value})}} required />
    </div>

    <div id="form-login-username" className="form-group">
    <label htmlFor="Email" className="float-label logintextcolor" >Gender</label>
    <select name="cars" className="LoginSignupInp" onChange={event=>{this.setState({gender:event.target.value})}}>
  <option value="Male">Male</option>
  <option value="female">female</option>
</select>
    </div>

    <div id="form-login-username" className="form-group">
    <label htmlFor="Email" className="float-label logintextcolor" >Age</label>
      <input id="username" className="form-control" name="age" type="text" size="18" alt="login" onChange={event=>{this.setState({age:event.target.value})}} required />
    </div>

    <div id="form-login-username" className="form-group">
    <label htmlFor="city" className="float-label logintextcolor" >City</label>
   <select name="city" className="LoginSignupInp" onChange={event=>{this.setState({City:event.target.value})}}>
  <option value="Tunis">Tunis</option>
  {/* //////////Add TUnisian citys///// */}
</select>
    </div>

    <div id="form-login-username" className="form-group">
    <label htmlFor="Email" className="float-label logintextcolor" >Address</label>
      <input id="username" className="form-control" name="Adresse" type="text" size="18" alt="login" onChange={event=>{this.setState({Adresse:event.target.value})}} required />
    </div>

    <div id="form-login-username" className="form-group">
    <label htmlFor="field" className="float-label logintextcolor" >field</label>
    <select name="fields" id="selectFiled" className="filteroffer" onChange={event=>{this.setState({field:event.target.value})}}>
                <option name="Design" value="Design">
                  Design
                </option>
                <option name="Photography" value="Photography">
                  Photography
                </option>
                <option name="Audio" value="Audio">
                  Audio
                </option>
                <option name="Djing" value="Djing">
                  Djing
                </option>
              </select>
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
     
      </div>
    );
  }
}

export default FreelancerSignup;