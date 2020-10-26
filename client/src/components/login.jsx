import React from "react"
import Footer from "./footer.jsx"
import axios from "axios"
import { connect } from "react-redux"
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Email: "",
            Password: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this)
    }

    login(e) {
        e.preventDefault()
        axios({
            url: '/api/clients/Login',
            method: 'post',
            data: {
                Email: this.state.Email,
                Password: this.state.Password
            }
        }).then(data => {
            console.log(data.data)
            if (!data.data.Login) {
                alert("Check Again")
            } else {
                this.props.update(data.data.userData)
            }

        }).catch(err => console.log(err))
    };

    handleChange(e) {
        var name = e.target.name;
        this.setState({
            [name]: e.target.value,
        });
        console.log(this.state)
    }

    render() {
        return (
            <div className="limiter">
            <div className="container-login100" >
                <div className="wrap-login100">
                    <form className="login100-form validate-form" onSubmit={this.login}>
                        <span className="login100-form-logo">
                            <i className="zmdi zmdi-landscape"></i>
                        </span>
    
                        <span className="login100-form-title p-b-34 p-t-27">
                            Log in
                        </span>
    
                        <div className="wrap-input100 validate-input" onChange={this.handleChange}>
                            <input className="input100" type="text" name="username" placeholder="Username" />
                            <span className="focus-input100" data-placeholder="&#xf207;"></span>
                        </div>
    
                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="password" name="pass" placeholder="Password" />
                            <span className="focus-input100" data-placeholder="&#xf191;"></span>
                        </div>
    
                        <div className="contact100-form-checkbox">
                            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                            <label className="label-checkbox100" htmlFor="ckb1">
                                Remember me
                            </label>
                        </div>
    
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>
    
                        <div className="text-center p-t-90">
                            <a className="txt1" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <footer/>
        </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)