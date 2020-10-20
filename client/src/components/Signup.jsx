import React from "react"
import Footer from "./footer.jsx"
import axios from "axios"

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            repassword: "",
            age: 0,
            gender: "",
            city: "",
            field: "",
            adresse:"",

            client: true,
            serviceprovider: false,
            Registration: "Register as a client"
        }
        this.serviceprovider = this.serviceprovider.bind(this)
        this.clientSignUp = this.clientSignUp.bind(this)
        this.client = this.client.bind(this)
    }

    clientSignUp() { //send axios request To register the user
        axios({
            url: '/api/clients/Signup',
            method: 'post',
            data: {
                FisrtName: this.state.firstname,
                LastName: this.state.lastname,
                Email: this.state.email,
                password: this.state.password,
                Gender: this.state.gender,
                Age: this.state.age,
                City: this.state.city,
                Adresse: this.state.adresse,
            }
        }).then(data => {
            console.log(data)
        })
    }

    serviceprovider() {
        this.setState({ client: false, serviceprovider: true, Registration: "Register as a service-provider" })
    }


    client() {
        this.setState({ client: true, serviceprovider: false, Registration: "Register as a client" })
    }
    render() {
        return <div>

            <div className="col-md-6 signup-form-1">
                <h3>{this.state.Registration}</h3>
                <button className="SwitchConsumer" id="switchbtn1" onClick={this.serviceprovider}>FreeLancer</button> <button className="SwitchConsumer" id="switchbtn2" onClick={this.client}>Client</button>
                {this.state.serviceprovider ? <div id="testeststst">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your First Name " onChange={(e) => { this.setState({ firstname: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Last Name " onChange={(e) => { this.setState({ lastname: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email " onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Your Password " onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm Your Password " onChange={(e) => { this.setState({ repassword: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Age " onChange={(e) => { this.setState({ age: e.target.value }) }} />
                    </div>
                    <label htmlFor="Your Gender">Your Gender</label>
                    <select className="select" className="LoginSignupInp" name="Your Gender" onChange={(e) => { this.setState({ gender: e.target.value }) }}>

                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your City " onChange={(e) => { this.setState({ city: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Adress " onChange={(e) => { this.setState({ adresse: e.target.value }) }} />
                    </div>

                    <label htmlFor="Your Field">Your Field</label>
                    <select className="select" className="LoginSignupInp" name="Your Field" onChange={(e) => { this.setState({ field: e.target.value }) }}>
                        <option value="Designer">3D Designer</option>
                        <option value="Designer">Graphic Designer</option>
                        <option value="Photographer">Photographer</option>
                        <option value="Audio Visual">Audio-visual</option>
                    </select>
                    <div className="form-group">
                        <input type="submit" className="btnSubmit" value="Signup" />
                        <input type="submit" className="btnSubmit" value="Login" />
                    </div></div> : null}


                {this.state.client ? <div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your First Name " onChange={(e) => { this.setState({ firstname: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Last Name " onChange={(e) => { this.setState({ lastname: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email " onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Your Password " onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm Your Password " onChange={(e) => { this.setState({ repassword: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Age " onChange={(e) => { this.setState({ age: e.target.value }) }} />
                    </div>
                    <label htmlFor="Your Gender">Your Gender</label>
                    <select className="select" name="Your Gender" className="LoginSignupInp" onChange={(e) => { this.setState({ gender: e.target.value }) }}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your City " onChange={(e) => { this.setState({ city: e.target.value }) }} />
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btnSubmit" value="Signup" onClick={this.clientSignUp}/>
                        <input type="submit" className="btnSubmit" value="Login" />
                    </div>
                </div> : null}

            </div>
            <Footer />
        </div>

    }
}

export default Signup