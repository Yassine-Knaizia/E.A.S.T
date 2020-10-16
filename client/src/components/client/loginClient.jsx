import React from "react"

class LoginClient extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
 <div className="col-md-6 signup-form-1">
        <h3>Login as a Client</h3>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Email " />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Password " />
        </div>      
        <div className="form-group">
            <input type="submit" className="btnSubmit" id="btn" value="Login" />
        </div>
        <div className="form-group">
            <a className="btnForgetPwd" id="forgetpass">Forget Password?</a>
        </div>

    </div>
        </div>
        
    }
}

export default LoginClient