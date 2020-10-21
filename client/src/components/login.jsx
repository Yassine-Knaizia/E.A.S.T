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
                    }

                }).catch(err => console.log(err))
             }
            
        };

        serviceprovider(){
         this.setState({client:false,serviceprovider:true,Registration:"Login as a service-provider",Email:"",Password:""})
        }

        client(){
         this.setState({client:true,serviceprovider:false,Registration:"Login as a client",Email:"",Password:""})
        }
    render() {
      return <div>
          <div className="col-md-6 signup-form-1">
        <h3 id="h3login">{this.state.Registration}</h3>
        <button className="SwitchConsumer" id="switchbtn1" onClick={this.serviceprovider}>Serviceprovider</button> <button className="SwitchConsumer" id="switchbtn2" onClick={this.client}>Client</button>
        {this.state.serviceprovider?
        <div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Email " onChange={event=>{this.setState({Email:event.target.value})}}/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Password " onChange={event=>{this.setState({Password:event.target.value})}} />
        </div>      
        <div className="form-group">
            <input type="submit" className="btnSubmit" id="btn" value="Login" onClick={this.Login}/>
        </div>
        <div className="form-group">
            <a className="btnForgetPwd" id="forgetpass">Forget Password?</a>
        </div>
        </div>:null}
        {this.state.client?<div>
            <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Email " onChange={event=>{this.setState({Email:event.target.value})}}/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Password " onChange={event=>{this.setState({Password:event.target.value})}}/>
        </div>      
        <div className="form-group">
            <input type="submit" className="btnSubmit" id="btn" value="Login" onClick={this.Login}/>
        </div>
        <div className="form-group">
            <a className="btnForgetPwd" id="forgetpass">Forget Password?</a>
        </div>
        </div>
        :null}
    </div>
        <Footer/>
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

export default connect(mapStateToProps,mapDispatchToProps)(Login)