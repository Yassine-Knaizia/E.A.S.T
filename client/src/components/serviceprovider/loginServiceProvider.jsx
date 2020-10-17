import React from "react"
import axios from "axios";
class LoginServiceProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.axiosLogin = this.axiosLogin.bind(this);
    }

    axiosLogin() {
        axios({
            url: '/login',
            method: 'post',
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }).then(result => {
            result = result.data
        })
    }



    render() {
        return <div>
            <div className="col-md-6 signup-form-1">
                <h3>Login as a Freelancer</h3>
                <div className="form-group">
                    <input name="email" type="text" className="form-control" placeholder="Your Email " onChange={(e) => { this.setState({ email: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <input name="password" type="password" className="form-control" placeholder="Your Password " onChange={(e) => { this.setState({ password: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <input onClick={this.axiosLogin} type="submit" className="btnSubmit" id="btn" value="Login" />
                </div>
                <a href="/auth/google">Sign In with Google</a>
                <div className="form-group">
                    <a className="btnForgetPwd" id="forgetpass">Forget Password?</a>
                </div>
            </div>
        </div>
    }
}

export default LoginServiceProvider