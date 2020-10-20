import React from "react"
import Footer from "./footer.jsx"
import { connect } from "react-redux"
import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            serviceprovider: true,
            client: false,
            Registration: "Login as a service-provider",
            users:[],
        }

        this.serviceprovider = this.serviceprovider.bind(this)
        this.client = this.client.bind(this)
        this.clientLogin = this.clientLogin.bind(this)
        this.serviceProviderLogin = this.serviceProviderLogin.bind(this)
    }

    serviceProviderLogin() {
        axios({
            url: '/api/freelancer/Login',
            method: 'post',
            data: {
                Email: this.state.email,
                Password: this.state.password
            }
        }).then(data => {
            data = data
            console.log(data)
        }).catch(err => console.log(err))
    };

    clientLogin() {
        axios({
            url: '/api/clients/Login',
            method: 'post',
            data: {
                Email: this.state.email,
                Password: this.state.password
            }
        }).then(data => {
            data = data.data.userData;


        });
    }

    serviceprovider() {
        this.setState({ client: false, serviceprovider: true, Registration: "Login as a service-provider" })
    }


    client() {
        this.setState({ client: true, serviceprovider: false, Registration: "Login as a client" })
    }
    render() {
        const { users } = this.props
        console.log(this.props.users)
        return <div>
            <div className="col-md-6 signup-form-1">
                <h3 id="h3login">{this.state.Registration}</h3>
                <button className="SwitchConsumer" id="switchbtn1" onClick={this.serviceprovider}>Serviceprovider</button> <button className="SwitchConsumer" id="switchbtn2" onClick={this.client}>Client</button>
                {this.state.serviceprovider ?
                    <div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email " onChange={(e) => { this.setState({ email: e.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Password " onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" id="btn" value="Login" onClick={this.serviceProviderLogin} />
                        </div>
                        <div className="form-group">
                            <a className="btnForgetPwd" id="forgetpass">Forget Password?</a>
                        </div>
                    </div> : null}
                {this.state.client ? <div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email " onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Password " onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btnSubmit" id="btn" value="Login" onClick={this.clientLogin} />
                    </div>
                    <a href="/auth/google">Sign In with Google</a>
                    <div className="form-group">
                        <a className="btnForgetPwd" id="forgetpass">Forget Password?</a>
                    </div>
                </div>
                    : null}
            </div>
            <Footer />
        </div>;
    }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      updateUser: (id) => dispatch({
        type: 'updateUser',
        id
      })
    }
  }
  
const stateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
}

export default connect(stateToProps, mapDispatchToProps)(Login)
