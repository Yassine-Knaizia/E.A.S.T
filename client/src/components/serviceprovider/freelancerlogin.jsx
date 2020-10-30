import React from "react"
import axios from "axios"
import {connect} from "react-redux"
class FreelancerLogin extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Email:"",
            Password:"",
            serviceprovider:true,
            client:false,
            Registration:"Login as a service-provider"
        }
  this.serviceprovider=this.serviceprovider.bind(this)
  this.client=this.client.bind(this)
  this.Login=this.Login.bind(this)
         }

         Login(e) {
                axios({
                    url: '/api/freeLancers/Login',
                    method: 'post',
                    data: {
                        Email: this.state.Email,
                        Password: this.state.Password
                    }
                }).then(data => {
                    console.log(data.data)
                    if(!data.data.Login){
                        alert("Check Again")
                    }else{
                        this.props.update(data.data.userData)
                        if(data.data.userData.type=="freelancer"){
                            this.props.ChangeUser('freelancer')
                            this.props.ChangePage("/")
                            window.history.pushState({},null,"/")
                        }
                    }
    
                }).catch(err => console.log(err))       
             event.preventDefault();
        };

        serviceprovider(){
         this.setState({client:false,serviceprovider:true,Registration:"Login as a service-provider",Email:"",Password:""})
        }

        client(){
         this.setState({client:true,serviceprovider:false,Registration:"Login as a client",Email:"",Password:""})
        }

    render() {
      return <div>
         <div className="container">
<div id="login" className="signin-card loginstyle">
  <div className="logo-image">
  <img src="https://bootdey.com/img/Content/User_for_snippets.png" alt="Logo" title="Logo" width="138" className="loginimg"/>
  </div>
  <h1 className="display1 logintextcolor">Login</h1>
 
  <form action="" method="" className="" role="form" onSubmit={this.Login}>
    <div id="form-login-username" className="form-group">
    <label htmlFor="Email" className="float-label logintextcolor" >Email</label>
      <input id="username" className="form-control" name="Email" type="text" size="18" alt="login" onChange={event=>{this.setState({Email:event.target.value})}} required />
      <span className="form-highlight"></span>
      <span className="form-bar"></span>
      <label htmlFor="username" className="float-label logintextcolor" >Password</label>
    </div>
    <div id="form-login-password" className="form-group">
      <input id="passwd" className="form-control" name="password" type="password" size="18" alt="password" onChange={event=>{this.setState({Password:event.target.value})}} required/>
      <span className="form-highlight"></span>
      <span className="form-bar"></span>
    </div>
    <div id="form-login-remember" className="form-group">
    </div>
    <div>
      <button className="btn btn-block btn-info ripple-effect" type="submit" name="Submit" alt="sign in"  style={{ background: "transparent"}}>Log in</button>  
	  </div>
    <a href="/auth/google" className="btn btn-primary">Go to Google</a>
      </form>
    </div>
  
</div>
      </div>;
    }
  }
  const mapStateToProps = (state, ownProps) => {
    return {
      user:state.user
    }
  }
 
  const mapDispatchToProps = (dispatch) => {
    return {
      update: (value) => dispatch({
        type: 'updatedata',
        value
      })
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(FreelancerLogin)