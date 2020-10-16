import React from "react"

class SignupServiceProvider extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
 <div className="col-md-6 signup-form-1">
        <h3>Registration</h3>

        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your First Name " />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Last Name " />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Email " />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Your Password " />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Your Password " />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Age " />
        </div>
        <select className="select">
                  <option value="male">Your Gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                    </select>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Country " />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your City " />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Postal Code " />
        </div>
        <select className="select">
                  <option value="Designer">Your Field</option>
                  <option value="Designer">3D Designer</option>
                  <option value="Designer">Graphic Designer</option>
                  <option value="Photographer">Photographer</option>
                  <option value="Audio Visual">Audio</option>
                    </select>
        <div className="form-group">
            <input type="submit" className="btnSubmit" id="btn" value="Signup" />
        </div>
    </div>
        </div>
        
    }
}

export default SignupServiceProvider