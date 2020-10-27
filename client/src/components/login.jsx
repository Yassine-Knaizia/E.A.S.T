import React from "react"
import Footer from "./footer.jsx"
import axios from "axios"
import {connect} from "react-redux"
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Email:"",
            Password:"",
            serviceprovider:true,
            client:false,
            Registration:"Login as a service-provider"
        }

  this.handleChange=this.handleChange.bind(this)
  this.serviceprovider=this.serviceprovider.bind(this)
  this.client=this.client.bind(this)
  this.Login=this.Login.bind(this)
         }

         Login() {
             if(this.state.serviceprovider){
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
             }else{
                axios({
                    url: '/api/clients/Login',
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

                        if(data.data.userData.type=="client"){
                        this.props.ChangeUser('client')
                        this.props.ChangePage("/")
                        window.history.pushState({},null,"/")
                        }
                    }
                }).catch(err => console.log(err))
             }
        };

        handleChange(e) {
            var name = e.target.name;
            this.setState({
              [name]: e.target.value,
            });
            console.log(this.state)
          }

        serviceprovider(){
         this.setState({client:false,serviceprovider:true,Registration:"Login as a service-provider",Email:"",Password:""})
        }

        client(){
         this.setState({client:true,serviceprovider:false,Registration:"Login as a client",Email:"",Password:""})
        }
    render() {
      return (
<div className="limiter">
		<div className="container-login100" >
			<div className="wrap-login100">
				<form className="login100-form validate-form" >
					<span className="login100-form-logo">
						<i className="zmdi zmdi-landscape"></i>
					</span>

					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div onChange={this.handleChange} className="wrap-input100 validate-input" data-validate = "Enter username">
                        <input 
                        className="input100" 
                        type="text" 
                        name="Email" 
                        placeholder="Email" 
                        required
                        />
						<span className="focus-input100" ></span>
					</div>

					<div className="wrap-input100 validate-input" >
                        <input 
                        className="input100" 
                        type="password" 
                        name="Password" 
                        placeholder="Password"
                        required
                        />
						<span className="focus-input100" ></span>
					</div>

					<div className="contact100-form-checkbox">
						<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
						<label className="label-checkbox100" htmlFor="ckb1" >
							Remember me
						</label>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
      )
    
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

export default connect(mapStateToProps,mapDispatchToProps)(Login)